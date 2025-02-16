import type { FastifyInstance } from "fastify"; // import { routerRegister } from "#app/server";
import fs from "node:fs";
import path from "node:path";

// 스크립트가 위치한 폴더 경로 설정
const routeDir = __dirname;

async function recursiveSearchPath(
  dir: string,
  callback: (filePath: string, prefix: string) => Promise<void>,
  errorCallback?: (error: unknown) => Promise<void>,
) {
  const files = await fs.promises.readdir(dir);

  const prefix = dir.substring(routeDir.length).replace(/\\/g, "/");

  for (const file of files) {
    const filePath = path.join(dir, file);
    const ext = path.extname(file);
    // 확장자가  파일만 실행하도록 필터링
    if (file === "index.ts" || file === "index.js") {
      try {
        await callback(filePath, prefix);
      } catch (error) {
        await errorCallback?.(error);
      }
    } else if (ext === "" && fs.statSync(filePath).isDirectory()) {
      await recursiveSearchPath(filePath, callback);
    }
  }
}

async function registerRoutes(fastify: FastifyInstance): Promise<void> {
  await recursiveSearchPath(
    routeDir,
    async (filePath, routePrefix) => {
      try {
        const routeModule = require(filePath);
        const route = routeModule?.default;
        if (route) {
          await fastify.register(route, { prefix: routePrefix });
          fastify.log.info(`Route module registered ${routePrefix}`);
        } else {
          fastify.log.error(`Route module not found in ${filePath}`);
        }
      } catch (error) {
        fastify.log.error(`Error registering route from ${filePath}: ${error}`);
      }
    },
    async (error) => {
      fastify.log.error(error);
    },
  );
}

export { registerRoutes };
