"use server";

import AiPostRepository, { type AiContent } from "#layer/repository/ai-post/ai.post.repo";
import OriginalPostRepository from "#layer/repository/original-post/original.post.repo";
import PostRepository from "#layer/repository/post/post.repo";
import OriginalPostAndAiPostRelationRepository from "#layer/repository/relations/original.post.ai.post.relation.repo";
import { postUserMessageToAI } from "#layer/service/ai/ai.core";
import { serviceWrapper } from "#lib/helper/service/service.helper";
import { getPrismaClient } from "#lib/instance/prisma/manager.prisma.instance";
import { getUserPrismaClient } from "#lib/instance/prisma/user.prisma.instance";
import { createId } from "@paralleldrive/cuid2";
import type { PostCategoryEnum } from "@repo/types/enums/post.category.enum";
import { parseAiJson } from "@repo/util/parser/ai-json.util";

export async function autoPublishByCategory(postCategoryList: PostCategoryEnum[], aiPostCategory: PostCategoryEnum) {
  const managerPrisma = getPrismaClient();
  const userPrisma = getUserPrismaClient();

  return await serviceWrapper(autoPublishByCategory.name, async () => {
    const sources = await OriginalPostRepository.select.manyForPublishByCategory(managerPrisma, postCategoryList);

    if (!sources[0]) throw new Error("there is no post to publish.");
    const originalPost = sources[0];

    if (!originalPost.originalPostSource || !originalPost.originalPostMeta)
      throw new Error("there is no post to publish.");

    const aiContentRaw = await postUserMessageToAI({
      promptName: "gemini-column-writer-ver1",
      userMessage: JSON.stringify({
        title: originalPost.originalPostSource.title,
        content: originalPost.originalPostSource.content,
      }),
    });

    const aiContent = parseAiJson(aiContentRaw) as AiContent;
    if (aiContent.isError) throw new Error("AI Error");

    const aiPostId = createId();
    const { aiPost } = await managerPrisma.$transaction(async (tx) => {
      const aiPost = await AiPostRepository.insert.createByAiContent(tx, aiPostId, aiContent, aiPostCategory);
      const relation = await OriginalPostAndAiPostRelationRepository.insert.create(tx, [originalPost.id], aiPostId);
      return { aiPost, relation };
    });

    await PostRepository.insert.create(userPrisma, aiPostId, {
      ...aiPost,
      originalPostAndAiPostRelation: [
        {
          originalPostBase: {
            originalPostMeta: originalPost.originalPostMeta,
            originalPostSource: originalPost.originalPostSource,
          },
        },
      ],
    });

    await Promise.all([
      OriginalPostRepository.update.autoStatus(managerPrisma, originalPost.id),
      AiPostRepository.update.publishStatus(managerPrisma, aiPostId),
    ]);

    return { id: aiPostId };
  });
}

export async function publishAiPost(aiPostId: string) {
  const managerPrisma = getPrismaClient();
  const id = createId();

  return await serviceWrapper(publishAiPost.name, async () => {
    const aiPost = await AiPostRepository.select.oneForPublish(managerPrisma, aiPostId);
    const aiPostRelation = await OriginalPostAndAiPostRelationRepository.select.manyForPublish(managerPrisma, aiPostId);

    if (!aiPost) throw new Error("AI Post not found");

    const userPrisma = getUserPrismaClient();

    // TODO: AI Image 생성
    const res = await PostRepository.insert.create(userPrisma, id, {
      ...aiPost,
      originalPostAndAiPostRelation: aiPostRelation.filter(
        (
          v,
        ): v is {
          originalPostBase: {
            originalPostSource: { url: string; title: string; content: string };
            originalPostMeta: { source: string; category: string };
          };
        } => !!v.originalPostBase.originalPostMeta && !!v.originalPostBase.originalPostSource,
      ),
    });
    await AiPostRepository.update.publishStatus(managerPrisma, aiPostId);
    return { id: res.id };
  });
}
