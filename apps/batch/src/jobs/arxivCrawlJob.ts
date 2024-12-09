import dayjs from "dayjs";

function makeParams() {
  const nowUtc = dayjs().utc();
  return JSON.stringify({
    from: `${nowUtc.subtract(1, "hour").format("YYYYMMDDHH")}0000`,
    to: `${nowUtc.add(1, "hour").format("YYYYMMDDHH")}0000`,
    source: "arxiv",
  });
}

export async function arxivCrawlJob() {
  const res = await fetch(`${process.env.CRAWLER_SERVER_URL}/crawl`, {
    method: "post",
    body: makeParams(),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return JSON.stringify(await res.json()).substring(0, 100);
}
