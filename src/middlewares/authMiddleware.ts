import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import {userService} from "../services/userService";
import { unauthorizedError } from "../utils/errorUtils";
import { CreateUserData } from "../utils/typeUtils";
dotenv.config();

export async function ensureAuthenticatedMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization: string | undefined = req.headers["authorization"];
  if (!authorization) throw unauthorizedError("Missing authorization header");

  const token: string = authorization.replace("Bearer ", "");
  if (!token) throw unauthorizedError("Missing token");

  try {
    const password:string = process.env.PASSWORD+"";
    const { userId } = jwt.verify(token, password ) as {
      userId: number;
    };
    const user: CreateUserData = await userService.findUserById(userId);
    res.locals.user = user;

    next();
  } catch {
    throw unauthorizedError("Invalid token");
  }
}
