import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../../utils/jwt.js";
import { AppError } from "../../errors/AppError.js";

export interface AuthRequest extends Request {
  userId?: string;
}

export function protect(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token;

  if (!token) {
    return next(new AppError("Unauthorized", 401));
  }

  try {
    const payload = verifyToken(token);

    req.userId = payload.userId;

    next();
  } catch {
    next(new AppError("Invalid token", 401));
  }
}