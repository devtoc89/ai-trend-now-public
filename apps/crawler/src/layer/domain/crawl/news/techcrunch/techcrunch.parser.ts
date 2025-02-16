import * as cheerio from "cheerio";

function cleanString(input: string) {
  // 제거할 문자들: 앞뒤의 개행(\n), 탭(\t), 공백 등을 정리
  return input.replace(/^[\s\r\n\t]+|[\s\r\n\t]+$/g, "");
}

export function parseTechcrunchList(body: string): Array<{ id: string; title: string; url: string }> {
  const data = new Map();
  const $ = cheerio.load(body);
  $(".wp-block-post").each((_, element) => {
    const title = cleanString($(element).find(".loop-card__title").text());
    const url = $(element).find("a.loop-card__title-link").attr("href") ?? "";
    data.set(url, { id: url, url, title });
  });
  return [...data.values()];
}

const containerSelector =
  ".wp-block-paragraph, .entry-content.wp-block-post-content.is-layout-constrained.wp-block-post-content-is-layout-constrained";

export function parseTechcrunchDetail(body: string) {
  const $ = cheerio.load(body);
  const text: string[] = [];
  $(`${containerSelector} > .wp-block-paragraph, ${containerSelector} > .wp-block-heading`).each((_, el) => {
    text.push(el.attribs.class === "wp-block-heading" ? `##${$(el).text()}##` : $(el).text());
  });
  return {
    content: text.join("\n"),
  };
}
