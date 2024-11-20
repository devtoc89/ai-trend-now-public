import type { CrawlArxivSearchParamsDTO } from "@repo/types/dto/crawl/arxiv/index.dto";
import type { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { crawlArxivAndPersist } from "#layer/crawl/arxiv/arxiv.service.ts";

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
        message: { type: "object" },
      },
      required: ["message"],
    },
    default: {
      description: "Default response",
      type: "object",
      properties: {
        message: { type: "object" },
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
      return {
        message: crawlArxivAndPersist({ from: from ?? new Date().toISOString(), to: to ?? new Date().toISOString() }),
      }; // 사용자 목록을 반환
    },
  );
}

export default arxivListRoutes;
