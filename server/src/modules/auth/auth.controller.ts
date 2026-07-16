import { Request, Response } from "express";

import { AuthService } from "./auth.service.js";

import { setAuthCookie, clearAuthCookie } from "../../utils/cookies.js";

const authService = new AuthService();

export const signup = async (req: Request, res: Response) => {
  const result = await authService.signup(req.body);

  setAuthCookie(res, result.token);

  res.status(201).json({
    success: true,
    data: result.user,
  });
};

export const login = async (req: Request, res: Response) => {
  const result = await authService.login(req.body);

  setAuthCookie(res, result.token);

  res.json({
    success: true,
    data: result.user,
  });
};

export const logout = (req: Request, res: Response) => {
  clearAuthCookie(res);

  res.json({
    success: true,
  });
};

export const me = async (req: any, res: Response) => {
  const user = await authService.me(req.userId);

  res.json({
    success: true,
    data: user,
  });
};