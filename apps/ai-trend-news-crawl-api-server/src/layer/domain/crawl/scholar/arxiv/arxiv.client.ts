// TODO: 크롤러와 관련된 코드는 별도 package분리가 나을지 고려 필요.
// TODO: 필요에 따라 조회 조건 고도화 필요.

import type { CrawlArxivSearchParamsDTO } from "@repo/types/dto/crawl/arxiv/arxiv.crawl.dto.ts";

const urlForm = ({ from, to }: CrawlArxivSearchParamsDTO) =>
  `http://export.arxiv.org/api/query?search_query=all:Artificial+Intelligence+AND+submittedDate:[${from}+TO+${to}]&start=0&max_results=100&sortBy=submittedDate&sortOrder=descending`;

export async function fetchArxiv(searchParam: CrawlArxivSearchParamsDTO): Promise<string | undefined> {
  try {
    const response = await fetch(urlForm(searchParam));
    return await response.text();
  } catch (error) {
    console.error("Error fetching data:", error);
    // TODO: 통합 에러 처리 방법론 고안 필요
  }
}
