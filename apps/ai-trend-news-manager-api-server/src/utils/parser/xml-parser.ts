import { XMLParser } from "fast-xml-parser";

export const xmlParser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "" });

export function parseXml<T>(text: string): T {
  return xmlParser.parse(text) as T;
}
