import AiPostRepository from "#layer/repository/ai-post/ai.post.repo";
import OriginalPostRepository from "#layer/repository/original-post/original.post.repo";
import OriginalPostAndAiPostRelationRepository from "#layer/repository/relations/original.post.ai.post.relation.repo";
import { postUserMessageToAI } from "#layer/service/ai/ai.core";
import { writePostByAi } from "#layer/service/ai/ai.writer";
import { serviceWrapper } from "#lib/helper/service/service.helper";
import { getPrismaClient } from "#lib/instance/prisma/manager.prisma.instance";
import { createId } from "@paralleldrive/cuid2";
import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";
import { shuffleArray } from "@repo/util/collection/collection.util";
import { logger } from "@repo/util/logger/pino.instance";
import { parseAiJson } from "@repo/util/parser/ai-json.util";

/**
 * Generates an AI document based on a list of source post IDs.
 *
 * @param postIdList - An array of IDs of the source posts.
 * @returns A promise that resolves to an object with the generated AI post ID.
 */
export async function generateAiPost(
  postIdList: string[],
  postCategoryList: PostCategoryEnum[] = [],
  aiPostCategory: PostCategoryEnum = PostCategoryEnum.COLUMN,
) {
  const prisma = getPrismaClient();

  return await serviceWrapper(generateAiPost.name, async () => {
    const sources = (await OriginalPostRepository.select.manyForAiPost(prisma, postIdList, postCategoryList))
      .map((v) => {
        if (!v.originalPostBase.originalPostMeta) return null;
        return { originalPostMeta: v.originalPostBase.originalPostMeta, originalPostSource: { ...v } };
      })
      .filter((v) => !!v);

    if (sources.length === 0) throw new Error("id is not valid.");

    const aiContent = await await writePostByAi(aiPostCategory, sources);

    const aiPostId = createId();
    await prisma.$transaction(async (tx) => {
      await AiPostRepository.insert.createByAiContent(tx, aiPostId, aiContent, aiPostCategory);
      await OriginalPostAndAiPostRelationRepository.insert.create(tx, postIdList, aiPostId);
    });

    return { id: aiPostId };
  });
}

export async function generateAiAutoPost() {
  const prisma = getPrismaClient();
  return await serviceWrapper(generateAiAutoPost.name, async () => {
    const sources = shuffleArray(await OriginalPostRepository.select.manyForRecent(prisma));
    const aiContentRaw = await postUserMessageToAI({
      promptName: "gemini-ai-content-choice",
      userMessage: JSON.stringify(
        sources.map((v) => ({ id: v.originalPostBase.id, title: v.title, content: v.content.substring(0, 500) })),
      ),
    });
    const aiContent = parseAiJson(aiContentRaw) as { idPairList: string[][]; isError: boolean };
    if (aiContent.isError) throw new Error("AI Error");

    const removeDuplicateMap = new Map();
    for (const ids of aiContent.idPairList) {
      if (ids[0] === ids[1]) return;
      const newKey = ids.sort().join("--");
      removeDuplicateMap.set(newKey, ids);
    }

    const resIdList: string[] = [];
    const targetList = [...removeDuplicateMap.values()].slice(0, 3);
    for (const ids of targetList) {
      const res = await generateAiPost(ids);
      if (res.success) {
        resIdList.push(res.data.id);
      } else {
        logger.error(res.error);
      }
    }

    return { id: resIdList };
  });
}
