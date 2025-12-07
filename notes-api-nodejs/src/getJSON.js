import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

export const __dirname = dirname(fileURLToPath(import.meta.url));
export const JSONpath = path.join(__dirname, "notes.json");

export function getJSON() {
  const data = fs.readFileSync(JSONpath, "utf-8");
  return JSON.parse(data);
}