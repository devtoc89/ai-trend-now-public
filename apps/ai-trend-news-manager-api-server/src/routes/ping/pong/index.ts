import type { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";

/**
 * Registers routes for user-related endpoints.
 *
 * @param fastify - The Fastify instance.
 * @param options - Plugin options.
 * @returns Promise<void> - A promise that resolves when the routes are registered.
 */
async function pongRoutes(fastify: FastifyInstance, _: FastifyPluginOptions): Promise<void> {
  /**
   * Sets up routes for user-related endpoints.
   *
   * @param fastify - The Fastify instance.
   * @param options - Plugin options.
   * @returns Promise<void> - A promise that resolves when the routes are registered.
   */
  fastify.get("/", async (_request: FastifyRequest, _reply: FastifyReply) => {
    return { message: "ping pong" }; // 사용자 목록을 반환
  });
}

export default pongRoutes;
