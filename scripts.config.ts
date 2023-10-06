import type { DenonConfig } from "@deps";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "server/bin/www.ts",
      desc: "Run my webserver",
      watch: true,
    },
  },
  allow: "all",
  unstable: true,
  watcher: {
    interval: 1_000,
    skip: ["**/.git/**", "**/bin/**"],
    paths: ["server", "lib", "public"],
    exts: ["ts", "css", "mjs", "json", "webmanifest"],
  },
};

export default config;
