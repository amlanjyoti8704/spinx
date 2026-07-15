import { Router } from "express";
import { signup } from "./auth.controller.js";
import { validate } from "../../middleware/validate.js";
import { signupSchema } from "./auth.validation.js";

const router = Router();

router.post("/signup", validate(signupSchema), signup);

// router.post("/login");

// router.post("/logout");

// router.get("/me");

export default router;