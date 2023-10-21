import { Logger } from "@modules/logger/mod.ts";

export const logger = Logger.create({
  severity: "DEBUG",
  mode: "PRETTY",
  application: "@duofiction/bin",
  environment: "DEVELOPMENT",
});

export function executeCommand(main: string, options?: Deno.CommandOptions) {
  const command = new Deno.Command(main, options);
  const { code, stdout, stderr } = command.outputSync();

  if (code !== 0) {
    throw new Error(`There was an error executing the command ${main}.`, {
      cause: new TextDecoder().decode(stderr),
    });
  }

  return new TextDecoder().decode(stdout);
}
