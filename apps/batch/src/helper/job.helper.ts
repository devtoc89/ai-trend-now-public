import { logger } from "@repo/util/logger/pino.instance";
import cron from "node-cron";

async function jobWrapper(
  now: Date | "manual" | "init",
  fn: (now: Date | "manual" | "init") => Promise<string> | string,
  time: string,
) {
  const startTime = new Date().getTime();
  try {
    logger.info(`[RUN][${fn.name}] [${time}]`);
    logger.info(`[RES][${fn.name}] ${await fn(now)}`);
  } catch (e) {
    logger.error((e as Error).message);
  } finally {
    logger.info(`[END][${fn.name}] [during: ${new Date().getTime() - startTime}ms]`);
  }
}

export function jobRegister(
  fn: (now: Date | "manual" | "init") => Promise<string> | string,
  time: string,
  runOnInit = false,
) {
  logger.info(`[REG][${fn.name}] [${time}]`);
  cron.getTasks().get(fn.name)?.stop();
  return cron.schedule(
    time,
    async (now) => {
      await jobWrapper(now, fn, time);
    },
    { name: fn.name, runOnInit, recoverMissedExecutions: false },
  );
}
