import { crawlAndPersist } from "#layer/domain/crawl/crawl.service";
import { type FastifyPluginAsyncTypebox, Type } from "@fastify/type-provider-typebox";
import { getCurrentTimeISOString } from "@repo/util/date/date.util";

const crawlRoutes: FastifyPluginAsyncTypebox = async function (fastify, _): Promise<void> {
  fastify.post(
    "/",
    {
      schema: {
        body: Type.Object({
          from: Type.Optional(Type.String()),
          to: Type.Optional(Type.String()),
          source: Type.Optional(Type.String()),
        }),
        response: {
          200: Type.Object({
            success: Type.Boolean(),
            data: Type.String(),
          }),
          500: Type.Object({ success: Type.Boolean(), error: Type.String() }),
        },
      },
    },
    async (req, _reply) => {
      const { from, to, source } = req.body;
      const defaultDate = getCurrentTimeISOString();
      return await crawlAndPersist({
        from: from ?? defaultDate,
        to: to ?? defaultDate,
        source: source ?? "all",
      });
    },
  );
};

export default crawlRoutes;
