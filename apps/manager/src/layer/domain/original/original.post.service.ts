"use server";

import { serviceWrapper } from "#lib/helper/service/service.helper";
import { getPrismaClient } from "#lib/instance/prisma/manager.prisma.instance";
import type {
  OriginalPostBase,
  OriginalPostMeta,
  OriginalPostSource,
  OriginalPostStatus,
} from "@prisma/client/manager/index.js";
import type { ResponseTypeDTO } from "@repo/types/dto/response/response.dto";
import { getCurrentTimeISOString } from "@repo/util/date/date.util";

export type RetrieveNewPostList = Array<
  Pick<OriginalPostBase, "id"> & {
    originalPostMeta: Pick<OriginalPostMeta, "source" | "category"> | null;
    originalPostSource: Pick<OriginalPostSource, "title" | "content" | "url" | "createdAt" | "orgCreatedAt"> | null;
    originalPostStatus: Pick<OriginalPostStatus, "selectedFlg"> | null;
  }
>;

export async function retrieveNewPostList({ page }: { page: number }): Promise<ResponseTypeDTO<RetrieveNewPostList>> {
  const prisma = getPrismaClient();
  const pageSize = 20;
  return await serviceWrapper(retrieveNewPostList.name, async () => {
    return await prisma.originalPostBase.findMany({
      skip: page * pageSize,
      take: pageSize,
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
}: { page: number }): Promise<ResponseTypeDTO<RetrieveSelectedPostList>> {
  const prisma = getPrismaClient();
  const pageSize = 20;
  return await serviceWrapper(retrieveSelectedPostList.name, async () => {
    return await prisma.originalPostBase.findMany({
      skip: page * pageSize,
      take: pageSize,
      where: {
        originalPostStatus: {
          selectedFlg: true,
        },
      },
      orderBy: {
        originalPostStatus: {
          selectedAt: "desc",
        },
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
