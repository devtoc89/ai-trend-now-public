import { parseXml } from "#lib/utils/parser/xml.parser.ts";
import type { CrawlArxivParsedDTO } from "@repo/types/dto/crawl/arxiv/arxiv.crawl.dto.ts";

export function arxivClientResponseParser(res: string) {
  return parseXml<CrawlArxivParsedDTO>(res);
}
