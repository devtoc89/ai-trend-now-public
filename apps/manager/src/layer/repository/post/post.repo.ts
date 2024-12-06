import { createId } from "@paralleldrive/cuid2";
import type { AiPost, OriginalPostMeta, OriginalPostSource } from "@prisma/client/manager/index.js";
import type { PostBase, PostDetail, PostMeta, Prisma as UserPrisma } from "@prisma/client/user/index.js";
import type { JsonObject } from "@prisma/client/user/runtime/library.js";
import { getCurrentTimeISOString } from "@repo/util/date/date.util";

export type RetrievePostList = Array<
  Pick<PostBase, "id" | "createdAt"> & {
    postMeta: Pick<PostMeta, "metadata"> | null;
    postDetail: Pick<PostDetail, "title" | "content"> | null;
  }
>;

class _select {
  public static manyForPostList(tx: UserPrisma.TransactionClient, page: number) {
    return tx.postBase.findMany({
      skip: page * 10,
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        createdAt: true,
        postMeta: {
          select: {
            metadata: true,
          },
        },
        postDetail: {
          select: {
            title: true,
            content: true,
          },
        },
      },
    });
  }
}

class _insert {
  public static create(
    tx: UserPrisma.TransactionClient,
    id: string,
    aiPost: Pick<AiPost, "id" | "title" | "content" | "summary" | "category" | "insights" | "metadata"> & {
      originalPostAndAiPostRelation: {
        originalPostBase: {
          originalPostSource: Pick<OriginalPostSource, "title" | "content" | "url">;
          originalPostMeta: Pick<OriginalPostMeta, "source" | "category">;
        };
      }[];
    },
  ) {
    const createdAt = getCurrentTimeISOString();
    // const metadata = aiPost.metadata as unknown as ManagerPrisma.JsonObject;
    return tx.postBase.create({
      data: {
        id,
        createdAt,
        aiPostId: aiPost.id,
        postDetail: {
          create: {
            id: createId(),
            title: aiPost.title,
            content: aiPost.content,
            summary: aiPost.summary,
            createdAt,
          },
        },
        postMeta: {
          create: {
            id: createId(),
            category: aiPost.category,
            metadata: {
              insights: JSON.parse(aiPost.insights),
              keywords: ((aiPost?.metadata as JsonObject | null)?.keywords as Array<string>) ?? [],
              imageUrl: "", // 뭔가 이미지 url
              references: aiPost.originalPostAndAiPostRelation.map((v) => ({
                title: v.originalPostBase.originalPostSource.title ?? "",
                content: v.originalPostBase.originalPostSource.content ?? "",
                source: v.originalPostBase.originalPostMeta.source ?? "",
                category: v.originalPostBase.originalPostMeta.category ?? "",
                url: v.originalPostBase.originalPostSource.url ?? "",
              })),
            },
            createdAt,
          },
        },
      },
    });
  }
}

class _update {}

class _delete {}

export default class PostRepository {
  public static readonly select = _select;
  public static readonly insert = _insert;
  public static readonly update = _update;
  public static readonly delete = _delete;
}
