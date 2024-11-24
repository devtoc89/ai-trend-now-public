import { type FastifyPluginAsyncTypebox, Type } from "@fastify/type-provider-typebox";
import { updatePostStatus } from "#layer/domain/post/original/original.post.service.ts";

/**
 * Registers routes for updating the status of an original post.
 *
 * @param fastify - The Fastify instance.
 * @param _ - Plugin options.
 * @returns Promise that resolves when the routes are registered.
 */
const originalPostStatusRoutes: FastifyPluginAsyncTypebox = async function (fastify, _): Promise<void> {
  fastify.patch(
    "/",
    {
      schema: {
        body: Type.Object({
          id: Type.String(),
          selectedFlg: Type.Boolean(),
        }),
        200: {
          default: Type.Object({
            successFlg: Type.Boolean(),
            selectedFlg: Type.Boolean(),
            selectedAt: Type.Union([Type.String(), Type.Undefined()]),
          }),
          500: Type.Object({ successFlg: Type.Boolean(), message: Type.String() }),
        },
      },
    },
    async (req, _reply) => {
      const { id, selectedFlg } = req.body;
      const res = await updatePostStatus({ id, selectedFlg });
      if (res.success) {
        _reply.code(200).send({ successFlg: true, data: res.data });
      } else {
        _reply.code(500).send({ successFlg: false, message: res.error });
      }
    },
  );
};

export default originalPostStatusRoutes;
