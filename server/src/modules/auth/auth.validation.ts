import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3)
    .max(50),

  email: z
    .string()
    .trim()
    .email(),

  password: z
    .string()
    .min(8)
    .max(32),
});

export type SignupInput = z.infer<typeof signupSchema>;