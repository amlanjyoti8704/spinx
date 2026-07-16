import { Router } from "express";
import { protect } from "../auth/auth.middleware.js";
import { sendRequest, getIncoming } from "./request.controller.js";


const router = Router();

router.post("/:receiverId", protect, sendRequest);
router.get("/incoming", protect, getIncoming);

export default router;