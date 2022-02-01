import pino from "pino";

export const pinoConfig = pino({
    level: "debug",
    prettyPrint: true,
}) as pino.Logger<pino.LoggerOptions>;