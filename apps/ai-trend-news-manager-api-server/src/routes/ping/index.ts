import type { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";

interface getQueryStringQuery {
  ping: string;
}

const getSchema = {
  description: "ping",
  tags: ["user", "code"],
  summary: "qwerty",
  querystring: {
    type: "object",
    properties: {
      ping: { type: "string" },
    },
    required: ["ping"], // 필수 필드
  },
  params: {},
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

/**
 * Registers routes for user-related endpoints.
 *
 * @param fastify - The Fastify instance.
 * @param options - Plugin options.
 * @returns Promise<void> - A promise that resolves when the routes are registered.
 */
async function pingRoutes(fastify: FastifyInstance, _: FastifyPluginOptions): Promise<void> {
  fastify.get(
    "/",
    {
      schema: getSchema,
    },
    async (_request: FastifyRequest<{ Querystring: getQueryStringQuery }>, _reply) => {
      console.log(_request.query.ping);
      return { message: "pong" }; // 사용자 목록을 반환
    },
  );

  fastify.put("/", async (_request: FastifyRequest, _reply: FastifyReply) => {
    return { message: "ping" }; // 사용자 목록을 반환
  });
}

export default pingRoutes;
