import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import Fastify, { type FastifyInstance } from "fastify";
import { registerRoutes } from "#routes/register.ts";

const isDev = process.env.NODE_ENV !== "production";

function createFastifyInstance() {
  return Fastify({
    logger: isDev
      ? {
          transport: {
            target: "pino-pretty",
            options: {
              translateTime: "SYS:standard",
              ignore: "pid,hostname",
            },
          },
        }
      : true, // 프로덕션에서는 기본 JSON 로깅 사용
  }).withTypeProvider<TypeBoxTypeProvider>();
}

async function registerSwagger(server: FastifyInstance) {
  await server.register(fastifySwagger, {
    swagger: {
      info: {
        title: "API Documentation",
        version: "1.0.0",
      },
    },
  });
}

async function registerSwaggerUi(server: FastifyInstance) {
  await server.register(fastifySwaggerUi, {
    routePrefix: "/documentation",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
    uiHooks: {
      onRequest(_request, _reply, next: () => void): void {
        next();
      },
      preHandler: function (_request, _reply, next) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, _request, _reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });
}

async function getServerInstance() {
  const server = createFastifyInstance();
  await registerSwagger(server);
  await registerSwaggerUi(server);
  await registerRoutes(server);
  await server.ready();
  return server;
}

export default getServerInstance;
