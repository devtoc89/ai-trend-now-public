import { PostCategoryEnum } from "@repo/types/enums/post.category.enum";

export const CategoryPromptMap = {
  [PostCategoryEnum.ALL]: "gemini-column-writer-ver1", // TODO
  [PostCategoryEnum.PAPER]: "gemini-paper-writer-ver1",
  [PostCategoryEnum.COLUMN]: "gemini-column-writer-ver1",
  [PostCategoryEnum.NEWS]: "gemini-column-writer-ver1", // TODO
};
