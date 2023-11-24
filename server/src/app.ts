import express, { Application, Response, Request } from "express";
import morgan from "morgan";
const app: Application = express();

// ========== Middlewares ==========
app.use(morgan("dev"));
app.use<Response>(express.json());
app.use<Request, Response>(express.urlencoded({ extended: true }));

// ========== Export ==========
export default app;
