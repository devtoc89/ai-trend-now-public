import { logger } from "#lib/instance/logger/pino.instance.ts";
import { type Prisma, PrismaClient } from "@repo/prisma-user";

let globalPrisma = makePrismaClient();

function makePrismaClient() {
  logger.debug("prisma client instance created");
  const client = new PrismaClient({
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    log: ["query", "info", "warn", "error"] as any, // 필요 시 로깅 옵션 추가
  });
  if (process.env.NODE_ENV !== "production") {
    client.$on("query", (e) => {
      const event = e as unknown as Prisma.QueryEvent;
      console.log(`${event.query} ${event.params} `);
    });
  }

  return client;
}

/**
 * Retrieves the singleton Prisma client instance.
 *
 * Ensures that a single instance of the Prisma client is created and connected.
 * If the client is not already instantiated, it will be created and connected
 * before being returned.
 *
 * @returns {PrismaClient} The connected Prisma client instance.
 */
export function getUserPrismaClient(): PrismaClient {
  if (!globalPrisma) {
    globalPrisma = makePrismaClient();
  }
  globalPrisma.$connect();
  return globalPrisma;
}