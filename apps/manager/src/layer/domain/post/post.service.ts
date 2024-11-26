"use server";

import { serviceWrapper } from "#lib/helper/service/service.helper.ts";
import { getPrismaClient } from "#lib/instance/prisma/prisma.instance.ts";
import type { PostBase, PostDetail, PostMeta } from "@prisma/client";
import type { ResponseTypeDTO } from "@repo/types/dto/response/response.dto.ts";

export type RetrievePostList = Array<
  Pick<PostBase, "id" | "createdAt"> & {
    postMeta: Pick<PostMeta, "metadata"> | null;
    postDetail: Pick<PostDetail, "title" | "content"> | null;
  }
>;
export async function retrievePostList({ page }: { page: number }): Promise<ResponseTypeDTO<RetrievePostList>> {
  const prisma = getPrismaClient();
  return await serviceWrapper(retrievePostList.name, async () => {
    return await prisma.postBase.findMany({
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
  });
}
