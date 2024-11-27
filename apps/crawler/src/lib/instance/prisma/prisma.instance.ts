import { PrismaClient } from "@repo/prisma-manager";

let globalPrisma = makePrismaClient();

function makePrismaClient() {
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
