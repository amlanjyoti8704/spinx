import { Router } from "express";
import { login, logout, me, signup } from "./auth.controller.js";
import { validate } from "../../middleware/validate.js";
import { loginSchema, signupSchema } from "./auth.validation.js";
import { protect } from "./auth.middleware.js";

const router = Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);
router.post("/logout", logout);
router.get("/me", protect, me);

export default router;
