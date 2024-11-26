import axios from "axios";
export async function getHtmlBody(url: string) {
  const response = await axios.post(
    "https://api.zyte.com/v1/extract",
    {
      url,
      httpResponseBody: true,
    },
    {
      auth: { username: process.env.ZYTE_API_KEY || "", password: "" },
    },
  );

  const httpResponseBody = Buffer.from(response.data.httpResponseBody, "base64").toString();

  return httpResponseBody;
}
