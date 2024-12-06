import AiPostRepository from "#layer/repository/ai-post/ai.post.repo";
import { serviceWrapper } from "#lib/helper/service/service.helper";
import { getPrismaClient } from "#lib/instance/prisma/manager.prisma.instance";

export async function retrieveAiPostList({ page }: { page: number }) {
  const prisma = getPrismaClient();
  const pageSize = 20;
  return await serviceWrapper(retrieveAiPostList.name, async () => {
    return await AiPostRepository.select.manyForAiPostList(prisma, page, pageSize);
  });
}

export async function retrieveAiPostItem({ id }: { id: string }) {
  const prisma = getPrismaClient();
  return await serviceWrapper(retrieveAiPostItem.name, async () => {
    return await AiPostRepository.select.oneForAiPostItem(prisma, id);
  });
}
