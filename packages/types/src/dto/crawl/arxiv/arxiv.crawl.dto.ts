export type CrawlArxivParsedDTO = {
  "?xml": {
    version: string;
    encoding: string;
  };
  feed: {
    link: {
      href: string;
      rel: string;
      type: string;
    };
    title: {
      "#text": string;
      type: string;
    };
    id: string;
    updated: string;
    "opensearch:totalResults": {
      "#text": string;
      "xmlns:opensearch": string;
    };
    "opensearch:startIndex": {
      "#text": string;
      "xmlns:opensearch": string;
    };
    "opensearch:itemsPerPage": {
      "#text": string;
      "xmlns:opensearch": string;
    };
    entry?: Array<CrawlArxivParsedEntryDTO>;
  };
};

export type CrawlArxivParsedEntryDTO = {
  id: string;
  updated: string;
  published: string;
  title: string;
  summary: string;
  author: Array<{
    name: string;
  }>;
  link: Array<{
    href: string;
    rel: string;
    type: string;
    title?: string;
  }>;
  "arxiv:primary_category": {
    "xmlns:arxiv": string;
    term: string;
    scheme: string;
  };
  category: Array<{
    term: string;
    scheme: string;
  }>;
  "arxiv:comment"?: {
    "#text": string;
    "xmlns:arxiv": string;
  };
};

export type CrawlArxivSearchParamsDTO = {
  from: string;
  to: string;
};

