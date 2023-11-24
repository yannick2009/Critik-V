import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

/*
 * Error handler
 * @params err - Error object
 * @param req - Request object
 * @param res - Response object
 * @param next - Next function
 * @returns Error object
 */
const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export default errorHandler;
