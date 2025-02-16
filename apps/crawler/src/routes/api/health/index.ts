import { type FastifyPluginAsyncTypebox, Type } from "@fastify/type-provider-typebox";

const healthRoutes: FastifyPluginAsyncTypebox = async function (fastify, _): Promise<void> {
  fastify.get(
    "/",
    {
      schema: {
        response: {
          200: Type.Object({}),
          500: Type.Object({ success: Type.Boolean(), error: Type.String() }),
        },
      },
    },
    async (_req, _reply) => {
      return {};
    },
  );
};

export default healthRoutes;
