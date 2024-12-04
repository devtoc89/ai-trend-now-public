import { postUserMessageToAI } from "#layer/domain/ai/ai.core";
import { serviceWrapper } from "#lib/helper/service/service.helper";
import { logger } from "#lib/instance/logger/pino.instance";
import { getPrismaClient } from "#lib/instance/prisma/manager.prisma.instance";
import { createId } from "@paralleldrive/cuid2";
import type { AiPost } from "@prisma/client/manager/index.js";
import type { ResponseTypeDTO } from "@repo/types/dto/response/response.dto";
import { shuffleArray } from "@repo/util/collection/collection.util";
import { getCurrentTimeISOString } from "@repo/util/date/date.util";
import { parseAiJson } from "@repo/util/parser/ai-json.util";
type AiContent = {
  insights: string[];
  content: string;
  title: string;
  summary: string;
  imageGeneratePrompt: string;
  keywords: string[];
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

    const aiContentRaw = await postUserMessageToAI({
      promptName: "gemini-column-writer-ver1",
      userMessage: JSON.stringify(sources),
    });
    const aiContent = parseAiJson(aiContentRaw) as AiContent;
    if (aiContent.isError) throw new Error("AI Error");

    const aiPostId = createId();
    prisma.$transaction(async (tx) => {
      await tx.aiPost.create({
        data: {
          id: aiPostId,
          title: aiContent.title,
          content: aiContent.content.replace(aiContent.title, ""), // AI가 본문에 타이틀을 반복한 경우 제거
          summary: aiContent.summary,
          insights: JSON.stringify(aiContent.insights),
          metadata: {
            keywords: aiContent.keywords,
            imageGeneratePrompt: aiContent.imageGeneratePrompt,
          },
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
      promptName: "gemini-ai-content-choice",
      userMessage: JSON.stringify(
        sources.map((v) => ({ id: v.originalPostBase.id, title: v.title, content: v.content.substring(0, 500) })),
      ),
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
    const targetList = [...removeDuplicateMap.values()].slice(0, 3);
    for (const ids of targetList) {
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

export type RetrieveAiItem = Pick<
  AiPost,
  "id" | "title" | "content" | "insights" | "summary" | "createdAt" | "isPublished"
>;

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
        summary: true,
        createdAt: true,
        isPublished: true,
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
        summary: true,
        createdAt: true,
        isPublished: true,
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
