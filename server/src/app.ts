import express, { Application, Response, Request } from "express";
import morgan from "morgan";
import errorHandler from "./errors/errorHandler";

const app: Application = express();
// ========== Middlewares ==========
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

// ========== Export ==========
export default app;
