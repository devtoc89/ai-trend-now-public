import { parseXml } from "#lib/utils/parser/xml.parser";
import type { CrawlArxivParsedDTO } from "@repo/types/dto/crawl/arxiv/arxiv.crawl.dto";

export function arxivClientResponseParser(res: string) {
  return parseXml<CrawlArxivParsedDTO>(res);
}
