export type AiContent = {
  insights: string[];
  content: string;
  title: string;
  summary: string;
  imageGeneratePrompt: string;
  keywords: string[];
  isError: boolean;
};

export type AiContentReference = {
  url: string;
  title: string;
  source: string;
  authors?: Array<{ name: string }> | { name: string };
  createdAt?: string;
  lastUpdatedAt?: string;
  category: string;
};

export type AiContentMeta = {
  references: AiContentReference[];
  keywords: string[];
  insights: string[];
  imageGeneratePrompt: string;
};

export type AiContentExt = {
  title: string;
  content: string;
  summary: string;
  metadata: AiContentMeta;
  isError?: boolean;
};
