import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from "./modules/auth/auth.routes.js";
import resumeRoutes from "./modules/resume/resume.routes.js";
import matchRoutes from "./modules/match/match.routes.js";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";
import requestRoutes from "./modules/request/request.routes.js";


const app = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/requests", requestRoutes)

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "SPINX API is running 🚀",
  });
});

app.use(errorHandler);

export default app;
