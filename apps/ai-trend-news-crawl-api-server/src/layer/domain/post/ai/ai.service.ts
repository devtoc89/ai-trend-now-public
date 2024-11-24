import { createId } from "@paralleldrive/cuid2";
import type { AiPost } from "@prisma/client";
import { postUserMessageToAI } from "#layer/domain/post/ai/ai.core.ts";
import { serviceWrapper } from "#lib/helper/service/service.helper.ts";
import { getPrismaClient } from "#lib/instance/prisma/prisma.instance.ts";
import { getCurrentTimeISOString } from "#lib/utils/date/date.util.ts";
import { parseAiJson } from "#lib/utils/parser/ai-json.parser.ts";
import type { ResponseType } from "#types/response/response.type.ts";

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
    console.log(aiContent);
    return { id: aiPostId };
  });
}

export type RetrieveAiList = Array<Pick<AiPost, "id" | "title" | "content" | "insights" | "createdAt"> & {}>;

export async function retrieveAiPostList({ page }: { page: number }): Promise<ResponseType<RetrieveAiList>> {
  const prisma = getPrismaClient();
  return await serviceWrapper(retrieveAiPostList.name, async () => {
    return await prisma.aiPost.findMany({
      skip: page * 10,
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        content: true,
        insights: true,
        createdAt: true,
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
