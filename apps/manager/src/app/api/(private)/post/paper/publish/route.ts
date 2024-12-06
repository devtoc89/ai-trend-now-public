import { logger } from "@repo/util/logger/pino.instance";

export async function POST(res: Request) {
  const params = await res.json();
  logger.info(`it's working? [${params}]`);
  return new Response("{}", {
    status: 200,
    headers: { "Set-Cookie": `token=${1}` },
  });
}
