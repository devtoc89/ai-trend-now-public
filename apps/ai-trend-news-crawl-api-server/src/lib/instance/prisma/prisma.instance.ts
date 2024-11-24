import { PrismaClient } from "@prisma/client";
import { logger } from "#lib/instance/logger/pino.instance.ts";

let globalPrisma = makePrismaClient();

function makePrismaClient() {
  logger.debug("prisma client instance created");
  return new PrismaClient({
    log: ["query", "info", "warn", "error"], // 필요 시 로깅 옵션 추가
  });
}

export function getPrismaClient() {
  if (!globalPrisma) {
    globalPrisma = makePrismaClient();
  }
  globalPrisma.$connect();
  return globalPrisma;
}
