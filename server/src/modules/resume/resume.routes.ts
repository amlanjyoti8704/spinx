import { Router } from "express";

import { protect } from "../auth/auth.middleware.js";
import { upload } from "../../config/multer.js";
import { uploadResume } from "./resume.controller.js";

const router = Router();

router.post("/upload", protect, upload.single("resume"), uploadResume);

export default router;