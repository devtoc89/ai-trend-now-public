import { getPrismaClient } from "#lib/instance/prisma/prisma.instance";
import type { Prisma, PrismaClient } from "@prisma/client/manager/index.js";
import { CrawlStatusEnum } from "@repo/types/enums/crawl.status.enum";
import { getElapsedTime } from "@repo/util/date/date.util";

type Params = {
  crawlId: string;
  startTime: Date;
};

/**
 * Handles an error that occurred during a crawl session.
 *
 * Updates the crawl session status to FAILED and sets the crawl time to the
 * elapsed time since the given start time.
 *
 * Also logs the error and error context.
 *
 * @param {object} params - Object with the following properties:
 *   - crawlId: The ID of the crawl session.
 *   - startTime: The date and time when the crawl session started.
 *   - error: The error that occurred.
 *   - context: The context in which the error occurred.
 */
export async function handleCrawlError({ crawlId, startTime }: Params): Promise<void> {
  const prisma = getPrismaClient();
  await prisma.crawlBase.update({
    where: { id: crawlId },
    data: {
      crawlTime: getElapsedTime(startTime),
      status: CrawlStatusEnum.FAILED,
    },
  });
}

/**
 * Updates the crawl session status to COMPLETED and sets the crawl time to the elapsed time since the given start time.
 *
 * @param tx - The Prisma transaction client used for database operations.
 * @param crawlId - The ID of the crawl session to update.
 * @param startTime - The date and time when the crawl session started.
 */
export async function crawlComplete(
  tx: Prisma.TransactionClient | PrismaClient,
  crawlId: string,
  startTime: Date,
  count = 0,
) {
  await await crawlStatusUpdate(tx, crawlId, startTime, CrawlStatusEnum.COMPLETED, count);
}
/**
 * Updates the status and crawl time of a crawl session to FAILED.
 *
 * @param tx - The Prisma transaction client used for database operations.
 * @param crawlId - The ID of the crawl session to update.
 * @param startTime - The date and time when the crawl session started.
 */
export async function crawlFail(tx: Prisma.TransactionClient | PrismaClient, crawlId: string, startTime: Date) {
  await crawlStatusUpdate(tx, crawlId, startTime, CrawlStatusEnum.FAILED);
}
/**
 * Updates the status and crawl time of a crawl session.
 *
 * @param tx - The Prisma transaction client used for database operations.
 * @param crawlId - The ID of the crawl session to update.
 * @param startTime - The date and time when the crawl session started.
 * @param status - The new status to set for the crawl session.
 */
export async function crawlStatusUpdate(
  tx: Prisma.TransactionClient | PrismaClient,
  crawlId: string,
  startTime: Date,
  status: CrawlStatusEnum,
  count?: number,
) {
  await tx.crawlBase.update({
    where: { id: crawlId },
    data: {
      crawlTime: getElapsedTime(startTime),
      status,
      count,
    },
  });
}
