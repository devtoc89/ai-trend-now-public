import { type FastifyPluginAsyncTypebox, type TDate, Type } from "@fastify/type-provider-typebox";
import { retrieveNewPostList, retrieveSelectedPostList } from "#layer/domain/post/original/original.post.service.ts";

/**
 *
 * @param fastify - The Fastify instance.
 * @param _ - Plugin options.
 * @returns Promise that resolves when the routes are registered.
 */
const newPostListRoutes: FastifyPluginAsyncTypebox = async function (fastify, _): Promise<void> {
  fastify.get(
    "/new",
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
                originalPostSource: Type.Union([
                  Type.Object({
                    title: Type.String(),
                    content: Type.String(),
                    url: Type.String(),
                    createdAt: Type.String({ format: "date-time" }) as unknown as TDate,
                    orgCreatedAt: Type.Union([Type.String({ format: "date-time" }) as unknown as TDate, Type.Null()]),
                  }),
                  Type.Null(),
                ]),
                originalPostMeta: Type.Union([
                  Type.Object({
                    source: Type.String(),
                    category: Type.String(),
                  }),
                  Type.Null(),
                ]),
                originalPostStatus: Type.Union([
                  Type.Object({
                    selectedFlg: Type.Boolean(),
                  }),
                  Type.Null(),
                ]),
              }),
            ),
          }),
          500: Type.Object({ successFlg: Type.Boolean(), message: Type.String() }),
        },
      },
    },
    async (req, _reply) => {
      const { page } = req.query;
      const res = await retrieveNewPostList({ page: Number(page) });
      if (res.success) {
        _reply.code(200).send({ data: res.data, successFlg: true });
      } else {
        _reply.code(500).send({ message: res.error, successFlg: false });
      }
    },
  );

  fastify.get(
    "/selected",
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
                originalPostSource: Type.Union([
                  Type.Object({
                    title: Type.String(),
                    content: Type.String(),
                    url: Type.String(),
                    createdAt: Type.String({ format: "date-time" }) as unknown as TDate,
                    orgCreatedAt: Type.Union([Type.String({ format: "date-time" }) as unknown as TDate, Type.Null()]), // Date는 ISO 8601 형식의 문자열로 표현
                  }),
                  Type.Null(),
                ]),
                originalPostMeta: Type.Union([
                  Type.Object({
                    source: Type.String(),
                    category: Type.String(),
                  }),
                  Type.Null(),
                ]),
              }),
            ),
          }),
          500: Type.Object({ successFlg: Type.Boolean(), message: Type.String() }),
        },
      },
    },
    async (req, _reply) => {
      const { page } = req.query;
      const res = await retrieveSelectedPostList({ page: Number(page) });
      if (res.success) {
        _reply.code(200).send({ data: res.data, successFlg: true });
      } else {
        _reply.code(500).send({ message: res.error, successFlg: false });
      }
    },
  );
};

export default newPostListRoutes;
