import { PrismaClient } from "@prisma/client/manager/index.js";

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
