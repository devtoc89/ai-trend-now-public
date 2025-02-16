import { registerRoutes } from "#routes/register";
import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { prettyConfig } from "@repo/util/logger/pino.instance";
import Fastify, { type FastifyInstance } from "fastify";

const isDev = process.env.NODE_ENV !== "production";
/**
 * Creates a new Fastify server instance with the logger and TypeBox type provider.
 *
 * @returns {FastifyInstance} - The created Fastify server instance.
 */
function createFastifyInstance(): FastifyInstance {
  const server = Fastify({
    logger: isDev
      ? {
          transport: {
            target: "pino-pretty",
            options: prettyConfig,
          },
        }
      : true, // 프로덕션에서는 기본 JSON 로깅 사용
  }).withTypeProvider<TypeBoxTypeProvider>();
  return server;
}

/**
 * Registers the Swagger API documentation with the specified Fastify server instance.
 *
 * @param {FastifyInstance} server - The Fastify server instance to which the Swagger API documentation will be registered.
 * @returns {Promise<void>} - A promise that resolves when the Swagger API documentation has been registered.
 */
async function registerSwagger(server: FastifyInstance): Promise<void> {
  const fastifySwagger = await import("@fastify/swagger")
  await server.register(fastifySwagger.default, {
    swagger: {
      info: {
        title: "API Documentation",
        version: "1.0.0",
      },
    },
  });
}

/**
 * Registers the Swagger UI with the specified Fastify server instance.
 *
 * @param {FastifyInstance} server - The Fastify server instance to which the Swagger UI will be registered.
 *
 * The Swagger UI is configured with the following options:
 * - `routePrefix`: The URL path prefix where the Swagger UI is served.
 * - `uiConfig`: Configuration for the Swagger UI, such as `docExpansion` and `deepLinking`.
 * - `uiHooks`: Hooks for processing requests and responses, including `onRequest` and `preHandler`.
 * - `staticCSP`: Enables Content Security Policy for static files.
 * - `transformStaticCSP`: A function to transform the static CSP header.
 * - `transformSpecification`: A function to transform the Swagger specification.
 * - `transformSpecificationClone`: Indicates whether to clone the Swagger specification before transforming it.
 *
 * @returns {Promise<void>} A promise that resolves when the server is ready.
 */
async function registerSwaggerUi(server: FastifyInstance): Promise<void> {
  const fastifySwaggerUi =  await import("@fastify/swagger-ui")
  await server.register(fastifySwaggerUi.default, {
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
let server: FastifyInstance;

/**
 * Initializes the server by registering routes and swagger documentation (if in development mode).
 *
 * @param {FastifyInstance} server - The Fastify server instance to initialize.
 * @returns {Promise<void>} A promise that resolves when the server is ready.
 */
async function InitiateServer(server: FastifyInstance): Promise<void> {
  if (process.env.NODE_ENV !== "production") {
    await registerSwagger(server);
    await registerSwaggerUi(server);
  }
  await registerRoutes(server);
  await server.ready();
}

/**
 * Retrieves the singleton Fastify server instance.
 *
 * Initializes the server if it hasn't been created yet by invoking the
 * createFastifyInstance and InitiateServer functions. Returns the existing
 * server instance if already initialized.
 *
 * @returns {Promise<FastifyInstance>} The Fastify server instance.
 */
async function getServerInstance(): Promise<FastifyInstance> {
  if (!server) {
    server = createFastifyInstance();
    await InitiateServer(server);
    return server;
  }
  return server;
}

export default getServerInstance;
