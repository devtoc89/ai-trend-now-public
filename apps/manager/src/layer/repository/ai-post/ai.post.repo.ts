import type { AiPost, Prisma } from "@prisma/client/manager/index.js";
import type { PostCategoryEnum } from "@repo/types/enums/post.category.enum";
import { getCurrentTimeISOString } from "@repo/util/date/date.util";

export type AiContent = {
  insights: string[];
  content: string;
  title: string;
  summary: string;
  imageGeneratePrompt: string;
  keywords: string[];
  isError: boolean;
};

export type RetrieveAiItem = Pick<
  AiPost,
  "id" | "title" | "content" | "insights" | "summary" | "createdAt" | "isPublished"
>;

export type RetrieveAiList = Array<RetrieveAiItem>;

class _select {
  public static manyForAiPostList(tx: Prisma.TransactionClient, page: number, pageSize: number) {
    return tx.aiPost.findMany({
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
  }

  public static oneForAiPostItem(tx: Prisma.TransactionClient, id: string) {
    return tx.aiPost.findUnique({
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
  }

  public static oneForPublish(tx: Prisma.TransactionClient, id: string) {
    return tx.aiPost.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        insights: true,
        category: true,
        summary: true,
        createdAt: true,
        metadata: true,
      },
    });
  }
}

class _insert {
  public static createByAiContent(
    tx: Prisma.TransactionClient,
    id: string,
    aiContent: AiContent,
    aiPostCategory: PostCategoryEnum,
  ) {
    return tx.aiPost.create({
      data: {
        id,
        title: aiContent.title,
        content: aiContent.content.replace(aiContent.title, ""), // AI가 본문에 타이틀을 반복한 경우 제거
        summary: aiContent.summary,
        category: aiPostCategory,
        insights: JSON.stringify(aiContent.insights),
        metadata: {
          keywords: aiContent.keywords,
          imageGeneratePrompt: aiContent.imageGeneratePrompt,
        } as Prisma.JsonObject,
        createdAt: getCurrentTimeISOString(),
      },
    });
  }
}

class _update {
  public static publishStatus(tx: Prisma.TransactionClient, id: string) {
    return tx.aiPost.update({
      where: {
        id,
      },
      data: {
        updatedAt: getCurrentTimeISOString(),
        isPublished: true,
      },
    });
  }
}

class _delete {}

export default class AiPostRepository {
  public static readonly select = _select;
  public static readonly insert = _insert;
  public static readonly update = _update;
  public static readonly delete = _delete;
}
