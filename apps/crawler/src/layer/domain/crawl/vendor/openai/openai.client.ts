// TODO: 크롤러와 관련된 코드는 별도 package분리가 나을지 고려 필요.
// TODO: 필요에 따라 조회 조건 고도화 필요.

import { getHtmlBody } from "#lib/helper/scrap/zyte.scrap";

const urlForm = () => "https://openai.com/news/";

export async function fetchOpenAiList(): Promise<string | undefined> {
  try {
    return await getHtmlBody(urlForm(), "https://www.google.com/");
  } catch (error) {
    console.error("Error fetching data:", error);
    // TODO: 통합 에러 처리 방법론 고안 필요
  }
}

export async function fetchOpenAiItem(url: string): Promise<string | undefined> {
  try {
    return await getHtmlBody(url, "https://www.google.com/");
    // return "";
  } catch (error) {
    console.error("Error fetching data:", error);
    // TODO: 통합 에러 처리 방법론 고안 필요
  }
}
