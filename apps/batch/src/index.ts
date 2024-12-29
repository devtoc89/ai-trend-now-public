require("dotenv").config();

import { jobRegister } from "#helper/job.helper";
import { arxivAiPostJob } from "#jobs/arxivAiPostJob";
import { arxivCrawlJob } from "#jobs/arxivCrawlJob";
import { logger } from "@repo/util/logger/pino.instance";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function start() {
  logger.info("batch server now is running.");
  jobRegister(arxivCrawlJob, "0 */15 * * * *");
  jobRegister(arxivAiPostJob, "0 */5 * * * *", true);
}

start();
