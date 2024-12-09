import { createId } from "@paralleldrive/cuid2";
import type { PostBase, PostDetail, PostMeta, Prisma as UserPrisma } from "@prisma/client/user/index.js";
import type { PostCategoryEnum } from "@repo/types/enums/post.category.enum";
import type { AiContentExt } from "@repo/types/model/ai.model";
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
  public static createByAiContent(
    tx: UserPrisma.TransactionClient,
    id: string,
    aiPostId: string,
    aiContent: AiContentExt,
    category: PostCategoryEnum,
  ) {
    const createdAt = getCurrentTimeISOString();
    return tx.postBase.create({
      data: {
        id,
        createdAt,
        aiPostId,
        postDetail: {
          create: {
            id: createId(),
            title: aiContent.title,
            content: aiContent.content,
            summary: aiContent.summary,
            createdAt,
          },
        },
        postMeta: {
          create: {
            id: createId(),
            category,
            metadata: aiContent.metadata,
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
