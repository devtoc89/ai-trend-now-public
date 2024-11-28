import axios from "axios";
export async function getHtmlBody(url: string, referer?: string) {
  const response = await axios.post(
    "https://api.zyte.com/v1/extract",
    {
      url,
      httpResponseBody: true,
    },
    {
      auth: { username: process.env.ZYTE_API_KEY || "", password: "" },
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "en-US,en;q=0.9",
        // "cache-control": "max-age=0",
        // priority: "u=0, i",
        // "sec-ch-ua": '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        // "sec-ch-ua-mobile": "?0",
        // "sec-ch-ua-platform": '"Windows"',
        // "sec-fetch-dest": "document",
        // "sec-fetch-mode": "navigate",
        // "sec-fetch-site": "same-origin",
        // "sec-fetch-user": "?1",
        // "upgrade-insecure-requests": "1",
        referer: referer ? referer : url.split("/").slice(0, 3).join("/"), // "referer"
      },
      // headers
    },
  );
  // response.headers.cookie;
  const httpResponseBody = Buffer.from(response.data.httpResponseBody, "base64").toString();

  // console.log(httpResponseBody);

  return httpResponseBody;
}
