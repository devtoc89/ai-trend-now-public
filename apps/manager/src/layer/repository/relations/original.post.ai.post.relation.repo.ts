import { createId } from "@paralleldrive/cuid2";
import type { Prisma } from "@prisma/client/manager/index.js";
import { getCurrentTimeISOString } from "@repo/util/date/date.util";

class _select {
  public static manyForPublish(tx: Prisma.TransactionClient, aiPostId: string) {
    return tx.originalPostAndAiPostRelation.findMany({
      where: {
        aiPostId,
      },
      select: {
        originalPostBase: {
          select: {
            originalPostMeta: {
              select: {
                source: true,
                category: true,
                url: true,
              },
            },
            originalPostSource: {
              select: {
                title: true,
                content: true,
              },
            },
          },
        },
      },
    });
  }
}

class _insert {
  public static create(tx: Prisma.TransactionClient, postIdList: string[], aiPostId: string) {
    return tx.originalPostAndAiPostRelation.createMany({
      data: postIdList.map((postId) => ({
        id: createId(),
        postId,
        aiPostId,
        createdAt: getCurrentTimeISOString(),
      })),
    });
  }
}

class _update {}

class _delete {}

export default class OriginalPostAndAiPostRelationRepository {
  public static readonly select = _select;
  public static readonly insert = _insert;
  public static readonly update = _update;
  public static readonly delete = _delete;
}
