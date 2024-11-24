import type { OriginalPostBase, OriginalPostMeta, OriginalPostSource, OriginalPostStatus } from "@prisma/client";
import { serviceWrapper } from "#lib/helper/service/service.helper.ts";
import { getPrismaClient } from "#lib/instance/prisma/prisma.instance.ts";
import { getCurrentTimeISOString } from "#lib/utils/date/date.util.ts";
import type { ResponseType } from "#types/response/response.type.ts";

export type RetrieveNewPostList = Array<
  Pick<OriginalPostBase, "id"> & {
    originalPostMeta: Pick<OriginalPostMeta, "source" | "category"> | null;
    originalPostSource: Pick<OriginalPostSource, "title" | "content" | "url" | "createdAt" | "orgCreatedAt"> | null;
    originalPostStatus: Pick<OriginalPostStatus, "selectedFlg"> | null;
  }
>;

export async function retrieveNewPostList({ page }: { page: number }): Promise<ResponseType<RetrieveNewPostList>> {
  const prisma = getPrismaClient();
  return await serviceWrapper(retrieveNewPostList.name, async () => {
    return await prisma.originalPostBase.findMany({
      skip: page * 10,
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        originalPostMeta: {
          select: {
            source: true,
            category: true,
          },
        },
        originalPostSource: {
          select: {
            title: true,
            content: true,
            url: true,
            createdAt: true,
            orgCreatedAt: true,
          },
        },
        originalPostStatus: {
          select: {
            selectedFlg: true,
          },
        },
      },
    });
  });
}

export type RetrieveSelectedPostList = Array<
  Pick<OriginalPostBase, "id"> & {
    originalPostMeta: Pick<OriginalPostMeta, "source" | "category"> | null;
    originalPostSource: Pick<OriginalPostSource, "title" | "content" | "url" | "createdAt" | "orgCreatedAt"> | null;
  }
>;

export async function retrieveSelectedPostList({
  page,
}: { page: number }): Promise<ResponseType<RetrieveSelectedPostList>> {
  const prisma = getPrismaClient();
  return await serviceWrapper(retrieveSelectedPostList.name, async () => {
    return await prisma.originalPostBase.findMany({
      skip: page * 10,
      take: 10,
      where: {
        originalPostStatus: {
          selectedFlg: true,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        originalPostMeta: {
          select: {
            source: true,
            category: true,
          },
        },
        originalPostSource: {
          select: {
            title: true,
            content: true,
            url: true,
            createdAt: true,
            orgCreatedAt: true,
          },
        },
      },
    });
  });
}

export async function updatePostStatus({ id, selectedFlg }: { id: string; selectedFlg: boolean }) {
  const prisma = getPrismaClient();

  return await serviceWrapper(updatePostStatus.name, async () => {
    const res = await prisma.originalPostStatus.update({
      where: {
        postId: id,
      },
      data: {
        selectedFlg,
        selectedAt: getCurrentTimeISOString(),
      },
    });
    return { selectedFlg: res.selectedFlg, selectedAt: res.selectedAt?.toISOString() };
  });
}
