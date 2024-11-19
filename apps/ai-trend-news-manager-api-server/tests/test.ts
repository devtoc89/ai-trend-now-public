import type { FastifyInstance } from "fastify";
import getServerInstance from "#app/server.ts";

describe("Fastify server", () => {
  let app: FastifyInstance;

  // let app: ReturnType<typeof Fastify>;

  beforeAll(async () => {
    app = await getServerInstance();
    console.log(app.printRoutes());
  });

  afterAll(async () => {
    await app.close();
  });

  test("GET /ping should return pong", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/ping",
      query: {
        ping: "pong",
      },
    });

    console.log(response);

    expect(response.statusCode).toBe(200);
    expect(await response.json()).toEqual({ message: "pong" });
  });
});
