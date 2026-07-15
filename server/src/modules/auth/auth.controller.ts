import { Request, Response } from "express";
import { signupSchema } from "./auth.validation.js";
import { AuthService } from "./auth.service.js";
import {
  successResponse,
  errorResponse,
} from "../../utils/apiResponse.js";
import { asyncHandler } from "../../middleware/asyncHandler.js";


const authService = new AuthService();

export const signup=asyncHandler(async(req: Request,res: Response) => {
    
  const user=await authService.signup(req.body);

  successResponse(
    res,
    "User created successfully",
    user,
    201
  )
});