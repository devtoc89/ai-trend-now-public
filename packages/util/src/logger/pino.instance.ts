const prettyConfig = {
  translateTime: "SYS:standard",
  ignore: "pid,hostname",
};

type LoggerIfName = "info" | "error" | "debug";
type LoggerInstance = {
  [key in LoggerIfName]: (msg?: string) => void;
};

const instance: {
  logger: LoggerInstance;
} = {
  logger: {
    info: (msg) => console.info(`[INFO] ${msg}`),
    error: (msg) => console.error(`[ERROR] ${msg}`),
    debug: (msg) => console.debug(`[DEBUG] ${msg}`),
  },
};

if (typeof process !== "undefined" && process.versions?.node ) {
  // Node.js 환경
  const pino = require("pino");
  if(process.env.NODE_ENV !== "production") {
    const pretty = require("pino-pretty");
    instance.logger = pino(pretty(prettyConfig))
  } else {
    // 프로덕션 환경에서는 기본 JSON 포맷
    instance.logger = pino()
  }
}

instance.logger.info("Logger initialized for the current environment.");

// Fastify 서버 로거 설정
// export const logger = instance.logger;
export const logger = instance.logger;
export { prettyConfig };
