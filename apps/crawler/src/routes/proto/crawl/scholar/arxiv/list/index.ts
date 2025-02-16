import { crawlAndPersist } from "#layer/domain/crawl/crawl.service";
import { getCurrentTimeISOString } from "@repo/util/date/date.util";
import type { FastifyInstance, FastifyPluginOptions, FastifyRequest } from "fastify";

interface getQueryStringQuery {
  ping: string;
}

const postSchema = {
  description: "crawl arxiv",
  tags: ["crawl", "arxiv"],
  summary: "qwerty",
  body: {
    type: "object",
    properties: {
      from: { type: "string" },
      to: { type: "string" },
    },
    additionalProperties: false,
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        message: { type: "string" },
      },
      required: ["message"],
    },
    default: {
      description: "Default response",
      type: "object",
      properties: {
        message: { type: "string" },
      },
    },
  },
};

type ArxivListRoutesParams = {
  from?: string;
  to?: string;
};
/**
 * Registers routes for crawling arxiv.
 *
 * @param fastify - The Fastify instance.
 * @param _ - Plugin options.
 * @returns Promise that resolves when the routes are registered.
 */
async function arxivListRoutes(fastify: FastifyInstance, _: FastifyPluginOptions): Promise<void> {
  /**
   * Sets up routes for crawling arxiv.
   * 1. POST /: crawling arxiv.
   */

  fastify.post(
    "/",
    {
      schema: postSchema,
    },
    async (req: FastifyRequest<{ Querystring: getQueryStringQuery }>, _reply) => {
      const { from, to } = req.body as ArxivListRoutesParams;
      const defaultDate = getCurrentTimeISOString();
      return {
        message: JSON.stringify(
          await crawlAndPersist({
            from: from ?? defaultDate,
            to: to ?? defaultDate,
            source: "arxiv",
          }),
        ),
      }; // 사용자 목록을 반환
    },
  );
}

export default arxivListRoutes;
