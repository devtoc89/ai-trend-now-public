"use server";

import PostRepository from "#layer/repository/post/post.repo";
import { serviceWrapper } from "#lib/helper/service/service.helper";
import { getUserPrismaClient } from "#lib/instance/prisma/user.prisma.instance";

export async function retrievePostList({ page }: { page: number }) {
  const prisma = getUserPrismaClient();
  return await serviceWrapper(
    retrievePostList.name,
    async () => await PostRepository.select.manyForPostList(prisma, page),
  );
}
