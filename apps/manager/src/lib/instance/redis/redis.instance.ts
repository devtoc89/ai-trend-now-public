import { logger } from "@repo/util/logger/pino.instance";
import Redis from "ioredis";

// Redis 클라이언트 생성
export const redis = new Redis({
  host: process.env.REDIS_URL ?? "localhost", // Redis 서버 주소
  port: 6379, // Redis 포트
});

// Redis 연결 테스트
redis.on("connect", () => {
  logger.info("Redis connected!");
});

redis.on("error", (err) => {
  logger.error(`Redis error: ${err.message}`);
});

redis.on("close", () => {
  logger.info("Redis close!");
});

redis.on("end", () => {
  logger.info("Redis end!");
});
