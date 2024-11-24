import { type FastifyPluginAsyncTypebox, type TDate, Type } from "@fastify/type-provider-typebox";
import { generateAiPost } from "#layer/domain/post/ai/ai.service.ts";

/**
 *
 * @param fastify - The Fastify instance.
 * @param _ - Plugin options.
 * @returns Promise that resolves when the routes are registered.
 */
const aiPostGenerateRoute: FastifyPluginAsyncTypebox = async function (fastify, _): Promise<void> {
  fastify.post(
    "/",
    {
      schema: {
        body: Type.Object({
          id: Type.Array(Type.String()),
        }),
        response: {
          200: Type.Object({
            successFlg: Type.Boolean(),
            data: Type.Object({
              id: Type.String(),
            }),
          }),
          500: Type.Object({ successFlg: Type.Boolean(), message: Type.String() }),
        },
      },
    },
    async (req, _reply) => {
      const { id } = req.body;
      const res = await generateAiPost(id);
      if (res.success) {
        _reply.code(200).send({ data: res.data, successFlg: true });
      } else {
        _reply.code(500).send({ message: res.error, successFlg: false });
      }
    },
  );
};

export default aiPostGenerateRoute;
