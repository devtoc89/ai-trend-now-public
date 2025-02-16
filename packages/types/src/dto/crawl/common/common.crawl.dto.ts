export type CreateManyOriginalPostListItemDTO = {
  id: string;
  url: string;
  title: string;
  content: string;
  orgCreatedAt?: string;
  orgUpdatedAt?: string;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  etc?: any;
};
export type CreateOriginalPostCommonMetaDTO = {
  source: string;
  category: string;
};
export type CrawlCommonResponseDTO = {
  list: CreateManyOriginalPostListItemDTO[];
  meta: CreateOriginalPostCommonMetaDTO;
};

export type CrawlCommonParamsDTO = {
  from: string;
  to: string;
  source: string;
};
