if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import getServerInstance from "#app/server";
import parser from "yargs-parser";

const start = async () => {
  // TODO: refactor initializing code.
  const args = parser(process.argv.slice(2), {
    number: ["port", "p"],
  });
  const port = args.p || args.port || Number(process.env.PORT ?? 0) || 8000;
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
