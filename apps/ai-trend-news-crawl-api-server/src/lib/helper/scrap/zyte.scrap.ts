export async function getHtmlBody(url: string) {
  // const url = "https://api.zyte.com/v1/extract";

  const response = await fetch("https://api.zyte.com/v1/extract", {
    method: "POST",
    // user: "",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${process.env.ZYTE_API_KEY}:`).toString("base64")}`,
    },
    body: JSON.stringify({
      url,
      httpResponseBody: true,
    }),
  });

  if (!response.ok) {
    console.log(response);
    throw new Error("HTTP error! status: $response.status");
  }
  const data = await response.json();
  const httpResponseBody = Buffer.from(data.httpResponseBody, "base64").toString();

  return httpResponseBody;
}
