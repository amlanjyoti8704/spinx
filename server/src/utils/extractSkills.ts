import { KNOWN_SKILLS } from "../lib/skills.js";

export function extractSkills(text: string) {
  const lower = text.toLowerCase();

  const found = KNOWN_SKILLS.filter((skill) =>
    lower.includes(skill.toLowerCase())
  );

  return [...new Set(found)];
}