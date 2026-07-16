import fs from "fs/promises";
import {PDFParse} from "pdf-parse";

export class ResumeService {
  async extractText(filePath: string) {
    const buffer = await fs.readFile(filePath);
    
    const parser=new PDFParse({data:buffer})
    const parsed = await parser.getText();

    return parsed.text;
  }
}

export const resumeService = new ResumeService();