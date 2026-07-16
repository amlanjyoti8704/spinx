import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().trim().min(3),

  email: z.string().trim().email(),

  password: z.string().min(8),
});

export const loginSchema = z.object({
  email: z.string().email(),

  password: z.string(),
});

export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;