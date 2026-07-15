import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from "./modules/auth/auth.routes.js";

import { env } from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";

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

app.use(errorHandler);

app.use("/api/auth", authRoutes);

app.get("/api/health", (req,res) => {
  res.status(200).json({
    success: true,
    message: "SPINX API is running 🚀",
  });
});

export default app;