import { type FastifyPluginAsyncTypebox, type TDate, Type } from "@fastify/type-provider-typebox";
import { retrieveAiPostList } from "#layer/domain/post/ai/ai.service.ts";

/**
 * Registers routes for retrieving AI post list.
 *
 * @param fastify - The Fastify instance.
 * @param _ - Plugin options.
 * @returns Promise that resolves when the routes are registered.
 */
const aiPostListRoutes: FastifyPluginAsyncTypebox = async function (fastify, _): Promise<void> {
  fastify.get(
    "/",
    {
      schema: {
        querystring: Type.Object({
          page: Type.String(),
        }),
        response: {
          200: Type.Object({
            successFlg: Type.Boolean(),
            data: Type.Array(
              Type.Object({
                id: Type.String(),
                title: Type.String(),
                content: Type.String(),
                insights: Type.String(),
                createdAt: Type.String({ format: "date-time" }) as unknown as TDate,
              }),
            ),
          }),
          500: Type.Object({ successFlg: Type.Boolean(), message: Type.String() }),
        },
      },
    },
    async (req, _reply) => {
      const { page } = req.query;
      const res = await retrieveAiPostList({ page: Number(page) });
      if (res.success) {
        _reply.code(200).send({ data: res.data, successFlg: true });
      } else {
        _reply.code(500).send({ message: res.error, successFlg: false });
      }
    },
  );
};

export default aiPostListRoutes;
