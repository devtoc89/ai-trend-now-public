import type { Prisma, PrismaClient } from "@prisma/client";
import { CrawlStatus } from "#enums/crawlStatus.enum.ts";
import { handleServiceError } from "#layer/global/error/error.handler.ts";
import { getPrismaClient } from "#lib/prisma/prisma.instance.ts";
import { getElapsedTime } from "#utils/date/date.util.ts";

type Params = {
  crawlId: string;
  startTime: Date;
  error: Error;
  context: string;
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
export async function handleCrawlError({ crawlId, startTime, error, context }: Params): Promise<void> {
  const prisma = getPrismaClient();
  await prisma.crawlBase.update({
    where: { id: crawlId },
    data: {
      crawlTime: getElapsedTime(startTime),
      status: CrawlStatus.FAILED,
    },
  });
  void handleServiceError(error, context);
}

/**
 * Updates the crawl session status to COMPLETED and sets the crawl time to the elapsed time since the given start time.
 *
 * @param tx - The Prisma transaction client used for database operations.
 * @param crawlId - The ID of the crawl session to update.
 * @param startTime - The date and time when the crawl session started.
 */
export async function crawlComplete(tx: Prisma.TransactionClient | PrismaClient, crawlId: string, startTime: Date) {
  await await crawlStatusUpdate(tx, crawlId, startTime, CrawlStatus.COMPLETED);
}
/**
 * Updates the status and crawl time of a crawl session to FAILED.
 *
 * @param tx - The Prisma transaction client used for database operations.
 * @param crawlId - The ID of the crawl session to update.
 * @param startTime - The date and time when the crawl session started.
 */
export async function crawlFail(tx: Prisma.TransactionClient | PrismaClient, crawlId: string, startTime: Date) {
  await crawlStatusUpdate(tx, crawlId, startTime, CrawlStatus.FAILED);
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
  status: CrawlStatus,
) {
  await tx.crawlBase.update({
    where: { id: crawlId },
    data: {
      crawlTime: getElapsedTime(startTime),
      status,
    },
  });
}