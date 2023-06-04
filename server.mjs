import fastify from "fastify";
import { remixFastifyPlugin } from "@mcansh/remix-fastify";

import * as serverBuild from "./build/index.mjs";

const MODE = process.env.NODE_ENV;

const app = fastify();

await app.register(remixFastifyPlugin, {
  build: serverBuild,
  mode: MODE,
  purgeRequireCacheInDevelopment: false
});

const port = process.env.PORT ? Number(process.env.PORT) || 3000 : 3000;

const address = await app.listen({ port, host: "0.0.0.0" });
console.log(`💿 [Remix] app ready: ${address}`)

if (MODE === "development") {
  let { broadcastDevReady } = await import("@remix-run/node");
  broadcastDevReady(serverBuild);
}
