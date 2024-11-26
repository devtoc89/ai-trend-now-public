if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import getServerInstance from "#app/server.ts";

const start = async () => {
  const port = process.env.PORT ? Number(process.env.PORT) : 8000;
  const server = await getServerInstance();
  try {
    server.listen({ port });
    console.log(server.printRoutes());
    server.log.info("server is listening");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
