import { Response } from "express";
import { AuthRequest } from "../auth/auth.middleware.js";
import path from 'path'
import { resumeService } from "./resume.service.js";
import { Profile } from "../../models/profile.model.js";
import { extractSkills } from "../../utils/extractSkills.js";


export async function uploadResume(
  req: AuthRequest,
  res: Response
) {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Resume is required",
    });
  }

  const parsedText = await resumeService.extractText(
    path.resolve(req.file.path)
  );

  const skills = extractSkills(parsedText);

  const profile = await Profile.findOneAndUpdate(
    {
      userId: req.userId,
    },
    {
      userId: req.userId,
      resumeUrl: req.file.path,
      parsedText,
      skills,
    },
    {
      upsert: true,
      new: true,
    }
  );

  return res.json({
    success: true,

    file: req.file.filename,
  });
}