import { DenonConfig } from "./deps.ts";

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
  },
  cert: "./duofiction.chained.crt",
};

export default config;