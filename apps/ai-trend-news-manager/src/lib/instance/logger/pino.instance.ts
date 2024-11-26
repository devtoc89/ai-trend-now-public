import pino from "pino";
import pretty from "pino-pretty";

const instance = {
  logger: pino(
    process.env.NODE_ENV !== "production"
      ? pretty({
          translateTime: "SYS:standard",
          ignore: "pid,hostname",
        })
      : undefined, // 프로덕션 환경에서는 기본 JSON 포맷
  ),
};

// Fastify 서버 로거 설정
export const logger = instance.logger;
