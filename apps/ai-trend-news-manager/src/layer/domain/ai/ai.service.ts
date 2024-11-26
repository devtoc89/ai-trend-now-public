import { postUserMessageToAI } from "#layer/domain/ai/ai.core.ts";
import { serviceWrapper } from "#lib/helper/service/service.helper.ts";
import { logger } from "#lib/instance/logger/pino.instance.ts";
import { getPrismaClient } from "#lib/instance/prisma/prisma.instance.ts";
import { createId } from "@paralleldrive/cuid2";
import type { AiPost, PostBase } from "@prisma/client";
import type { ResponseTypeDTO } from "@repo/types/dto/response/response.dto.ts";
import { shuffleArray } from "@repo/util/collection/collection.util.ts";
import { getCurrentTimeISOString } from "@repo/util/date/date.util.ts";
import { parseAiJson } from "@repo/util/parser/ai-json.util.ts";
type AiContent = {
  insights: string[];
  content: string;
  title: string;
  isError: boolean;
};

/**
 * Generates an AI document based on a list of source post IDs.
 *
 * @param id - An array of IDs of the source posts.
 * @returns A promise that resolves to an object with the generated AI post ID.
 */
export async function generateAiPost(id: string[]) {
  const prisma = getPrismaClient();
  return await serviceWrapper(generateAiPost.name, async () => {
    const sources = await prisma.originalPostSource.findMany({
      where: {
        postId: {
          in: id,
        },
      },
      select: {
        title: true,
        content: true,
      },
    });

    if (sources.length === 0) throw new Error("id is not valid.");

    const aiContentRaw = await postUserMessageToAI({ userMessage: JSON.stringify(sources) });
    const aiContent = parseAiJson(aiContentRaw) as AiContent;
    if (aiContent.isError) throw new Error("AI Error");

    const aiPostId = createId();
    prisma.$transaction(async (tx) => {
      await tx.aiPost.create({
        data: {
          id: aiPostId,
          title: aiContent.title,
          content: aiContent.content,
          insights: JSON.stringify(aiContent.insights),
          createdAt: getCurrentTimeISOString(),
        },
      });
      await tx.originalPostAndAiPostRelation.createMany({
        data: id.map((id) => ({
          id: createId(),
          postId: id,
          aiPostId,
          createdAt: getCurrentTimeISOString(),
        })),
      });
    });
    return { id: aiPostId };
  });
}

export async function generateAiAutoPost() {
  const prisma = getPrismaClient();
  return await serviceWrapper(generateAiPost.name, async () => {
    const sources = shuffleArray(
      await prisma.originalPostSource.findMany({
        take: 100,
        orderBy: {
          createdAt: "desc",
        },
        select: {
          title: true,
          content: true,
          originalPostBase: {
            select: {
              id: true,
            },
          },
        },
      }),
    );
    const aiContentRaw = await postUserMessageToAI({
      userMessage: JSON.stringify(
        sources.map((v) => ({ id: v.originalPostBase.id, title: v.title, content: v.content.substring(0, 500) })),
      ),
      promptName: "gemini-ai-content-choice",
    });
    const aiContent = parseAiJson(aiContentRaw) as { idPairList: string[][]; isError: boolean };
    if (aiContent.isError) throw new Error("AI Error");

    const removeDuplicateMap = new Map();
    for (const ids of aiContent.idPairList) {
      if (ids[0] === ids[1]) return;
      const newKey = ids.sort().join("--");
      removeDuplicateMap.set(newKey, ids);
    }
    const resIdList: string[] = [];
    for (const ids of removeDuplicateMap.values()) {
      const res = await generateAiPost(ids);
      if (res.success) {
        resIdList.push(res.data.id);
      } else {
        logger.error(res.error);
      }
    }

    return { id: resIdList };
  });
}

export type RetrieveAiItem = Pick<AiPost, "id" | "title" | "content" | "insights" | "createdAt"> & {
  postBase: Pick<PostBase, "id"> | null;
};

export type RetrieveAiList = Array<RetrieveAiItem>;

export async function retrieveAiPostList({ page }: { page: number }): Promise<ResponseTypeDTO<RetrieveAiList>> {
  const prisma = getPrismaClient();
  const pageSize = 20;
  return await serviceWrapper(retrieveAiPostList.name, async () => {
    return await prisma.aiPost.findMany({
      skip: page * pageSize,
      take: pageSize,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        content: true,
        insights: true,
        createdAt: true,
        postBase: {
          select: {
            id: true,
          },
        },
        originalPostAndAiPostRelation: {
          select: {
            originalPostBase: {
              select: {
                originalPostSource: {
                  select: {
                    url: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  });
}

export async function retrieveAiPostItem({ id }: { id: string }): Promise<ResponseTypeDTO<RetrieveAiItem | null>> {
  const prisma = getPrismaClient();
  return await serviceWrapper(retrieveAiPostItem.name, async () => {
    return await prisma.aiPost.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        insights: true,
        createdAt: true,
        postBase: {
          select: {
            id: true,
          },
        },
        originalPostAndAiPostRelation: {
          select: {
            originalPostBase: {
              select: {
                originalPostSource: {
                  select: {
                    url: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  });
}
