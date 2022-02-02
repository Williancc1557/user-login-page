import express from "express";
import setupMiddleware from "./middleware";
import setupRouters from "./routes";

const app = express();

setupMiddleware(app);
setupRouters(app);

export default app;