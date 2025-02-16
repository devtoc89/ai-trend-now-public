import * as cheerio from "cheerio";

function cleanString(input: string) {
  // 제거할 문자들: 앞뒤의 개행(\n), 탭(\t), 공백 등을 정리
  return input.replace(/^[\s\r\n\t]+|[\s\r\n\t]+$/g, "");
}

export function parseOpenAiList(body: string): Array<{ id: string; title: string; url: string }> {
  const data = new Map();
  const $ = cheerio.load(body);
  $("main > .mt-2xl > section, main > .mt-2xl > div").each((_, element) => {
    $($(element).find("a.rounded"))
      .slice(0, 3)
      .each((_, element) => {
        const title = cleanString($(element).find("div > div > div > div > div.text-gray-0").text());
        const url = $(element).attr("href") ?? "";
        data.set(url, { id: url, url, title });
      });
  });
  return [...data.values()];
}

export function parseOpenAiDetail(body: string) {
  const $ = cheerio.load(body);
  const text: string[] = [];
  $("article > div > div > p, article > div > div > h2").each((_, el) => {
    $(el).each((_, v) => {
      text.push(v.tagName === "H3" ? `##${$(el).text()}##` : $(el).text());
    });
  });
  return {
    content: text.join("\n"),
  };
}
