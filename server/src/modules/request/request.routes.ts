import { Router } from "express";
import { protect } from "../auth/auth.middleware.js";
import { sendRequest, getIncoming, acceptRequest, rejectRequest, getOutgoing } from "./request.controller.js";


const router = Router();

router.post("/:receiverId", protect, sendRequest);
router.post("/accept/:requestId", protect, acceptRequest);
router.post("/reject/:requestId", protect, rejectRequest);
router.get("/outgoing", protect, getOutgoing);
router.get("/incoming", protect, getIncoming);

export default router;