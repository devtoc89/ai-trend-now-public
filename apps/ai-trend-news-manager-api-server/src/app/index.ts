if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

import getServerInstance from "#app/server.ts";

const start = async () => {
  const server = await getServerInstance();
  try {
    await server.listen({ port: 3000 });
    console.log(server.printRoutes());
    server.log.info("server is listening");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
