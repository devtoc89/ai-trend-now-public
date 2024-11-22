import type { CrawlArxivParsedDTO } from "@repo/types/dto/crawl/arxiv/index.dto";
import { parseXml } from "#lib/utils/parser/xml-parser.ts";

export function arxivClientResponseParser(res: string) {
  return parseXml<CrawlArxivParsedDTO>(res);
}
