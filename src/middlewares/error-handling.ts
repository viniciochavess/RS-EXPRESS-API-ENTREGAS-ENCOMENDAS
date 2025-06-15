import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/AppError";


export function errorHandling(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
):Response {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({message: error.message});
  }

 return response.status(error.statusCode).json({ message: error.message });

}

