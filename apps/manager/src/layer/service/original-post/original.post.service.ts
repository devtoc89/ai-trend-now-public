"use server";

import OriginalPostRepository from "#layer/repository/original-post/original.post.repo";
import { serviceWrapper } from "#lib/helper/service/service.helper";
import { getPrismaClient } from "#lib/instance/prisma/manager.prisma.instance";

export async function retrieveNewPostList({ page }: { page: number }) {
  const prisma = getPrismaClient();
  const pageSize = 20;
  return await serviceWrapper(retrieveNewPostList.name, async () => {
    return OriginalPostRepository.select.manyForNewPostList(prisma, page, pageSize);
  });
}

export async function retrieveSelectedPostList({ page }: { page: number }) {
  const prisma = getPrismaClient();
  const pageSize = 20;
  return await serviceWrapper(retrieveSelectedPostList.name, async () => {
    return await OriginalPostRepository.select.manyForSelectedPostList(prisma, page, pageSize);
  });
}

export async function updatePostStatus({ id, selectedFlg }: { id: string; selectedFlg: boolean }) {
  const prisma = getPrismaClient();

  return await serviceWrapper(updatePostStatus.name, async () => {
    const res = await OriginalPostRepository.update.selectedStatus(prisma, id, selectedFlg);
    return { selectedFlg: res.selectedFlg, selectedAt: res.selectedAt?.toISOString() };
  });
}
