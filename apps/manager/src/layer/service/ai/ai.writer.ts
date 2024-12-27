import type { OriginalPostMeta, OriginalPostSource } from "@prisma/client/manager/index.js";
import type { JsonObject } from "@prisma/client/manager/runtime/library.js";
import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";
import type { AiContent, AiContentExt } from "@repo/types/model/ai.model";
import { parseAiJson } from "@repo/util/parser/ai-json.util";
import { CategoryPromptMap } from "#constants/category.contant";
import { postUserMessageToAI } from "#layer/service/ai/ai.core";

export type OriginalPost = {
  originalPostMeta: Pick<OriginalPostMeta, "url" | "source" | "category" | "etc" | "orgCreatedAt" | "orgUpdatedAt">;
  originalPostSource: Pick<OriginalPostSource, "title" | "content" | "createdAt">;
};

type Writer = (originalPost: OriginalPost[]) => Promise<AiContentExt>;

type WriterMap = {
  [key in PostCategoryEnum]: Writer;
};

const writerCommon = async (category: PostCategoryEnum, userMessage: string): Promise<AiContent> => {
  const aiContentRaw = await postUserMessageToAI({
    promptName: CategoryPromptMap[category],
    userMessage: JSON.stringify(userMessage),
  });

  const aiContent = parseAiJson(aiContentRaw) as AiContent;
  if (aiContent.isError) throw new Error("AI Error");
  return aiContent;
};

type Author = {
  name: string;
};

type PrimaryCategory = {
  "xmlns:arxiv": string;
  term: string;
  scheme: string;
};

type Comment = {
  "#text": string;
  "xmlns:arxiv": string;
};

type ArxivMeta = {
  author: Author[];
  "arxiv:primary_category": PrimaryCategory;
  "arxiv:comment": Comment;
};

// TODO: 모델 고도화 필요..
const paperWriter: Writer = async (originalPost) => {
  if (!originalPost[0]) throw Error("No Data to write post");
  const etc = { ...((originalPost[0].originalPostMeta?.etc as JsonObject) ?? {}) } as ArxivMeta;
  const createdAt = originalPost[0].originalPostMeta.orgCreatedAt?.toISOString();
  const lastUpdatedAt = originalPost[0].originalPostMeta.orgUpdatedAt?.toISOString();
  const title = originalPost[0].originalPostSource.title;
  const content = originalPost[0].originalPostSource.content;
  const url = originalPost[0].originalPostMeta.url;
  const source = originalPost[0].originalPostMeta.source;
  const category = originalPost[0].originalPostMeta.category;

  const aiContent = await writerCommon(
    PostCategoryEnum.PAPER,
    JSON.stringify({
      lastUpdatedAt,
      createdAt,
      authors: etc.author,
      title,
      content,
    }),
  );

  const editAiContent: AiContentExt = {
    title: aiContent.title,
    content: aiContent.content.replace(aiContent.title, ""),
    summary: aiContent.summary,
    isError: aiContent.isError,
    metadata: {
      references: [
        {
          url,
          title,
          authors: etc.author,
          createdAt,
          lastUpdatedAt,
          source,
          category,
        },
      ],
      keywords: aiContent.keywords,
      insights: aiContent.insights,
      imageGeneratePrompt: aiContent.imageGeneratePrompt,
    },
  };

  return editAiContent;
};

const otherWriter: Writer = async (originalPost) => {
  if (!originalPost.length) throw Error("No Data to write post");

  const aiContent = await writerCommon(
    PostCategoryEnum.ALL,
    JSON.stringify(
      originalPost.map((v) => ({
        title: v.originalPostSource.title,
        content: v.originalPostSource.content,
      })),
    ),
  );

  const editAiContent: AiContentExt = {
    title: aiContent.title,
    content: aiContent.content.replace(aiContent.title, ""),
    summary: aiContent.summary,
    isError: aiContent.isError,
    metadata: {
      references: originalPost.map((v) => ({
        url: v.originalPostMeta.url,
        title: v.originalPostSource.title,
        source: v.originalPostMeta.source,
        category: v.originalPostMeta.category,
      })),
      keywords: aiContent.keywords,
      insights: aiContent.insights,
      imageGeneratePrompt: aiContent.imageGeneratePrompt,
    },
  };

  return editAiContent;
};

const writerMap: WriterMap = {
  [PostCategoryEnum.ALL]: otherWriter,
  [PostCategoryEnum.COLUMN]: otherWriter,
  [PostCategoryEnum.NEWS]: otherWriter,
  [PostCategoryEnum.PAPER]: paperWriter,
};

export async function writePostByAi(aiPostCategory: PostCategoryEnum, originalPost: OriginalPost[]) {
  return await writerMap[aiPostCategory](originalPost);
}
