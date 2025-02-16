import * as cheerio from "cheerio";

function cleanString(input: string) {
  // 제거할 문자들: 앞뒤의 개행(\n), 탭(\t), 공백 등을 정리
  return input.replace(/^[\s\r\n\t]+|[\s\r\n\t]+$/g, "");
}

export function parseAiNewsList(body: string): Array<{ id: string; title: string; url: string }> {
  const data = new Map();
  const $ = cheerio.load(body);
  $("#main .entry-content").each((_, element) => {
    const anchorEl = $(element).find("a");
    const title = cleanString($(anchorEl).text());
    const url = $(anchorEl).attr("href") ?? "";
    data.set(url, { id: url, url, title });
  });
  return [...data.values()];
}

// const containerSelector =
//   ".wp-block-paragraph, .entry-content.wp-block-post-content.is-layout-constrained.wp-block-post-content-is-layout-constrained";

export function parseAiNewsDetail(body: string) {
  const $ = cheerio.load(body);
  const text: string[] = [];
  $(".entry-content > div > .cell.small-12.medium-12.large-12")
    .filter((_, v) => !$(v).hasClass("margin-bottom-1"))
    // .filter((_, v) => !v?.attributes?.[0]?.value.includes("margin-bottom-1"))
    .each((_, el) => {
      $(el)
        .find("p, h3")
        .each((_, v) => {
          text.push(v.tagName === "H3" ? `##${$(el).text()}##` : $(el).text());
        });
    });
  return {
    content: text.join("\n"),
  };
}
