import type { Express } from "express";
import { Router } from "express";
import { readdirSync } from "fs";
import { pinoConfig } from "../../log/pino-config";


export default (app: Express): void => {
    const router = Router();
    app.use("/", router);

    pinoConfig.debug("app created");

    readdirSync(`${__dirname}/../routes`).map(async file => {
        if (!file.includes(".test.")) {
            pinoConfig.debug(`this route was geted: ${file}`);
            (await import(`../routes/${file}`)).default(router);
        }
    });
};