import { join } from "path";

export function cwd(...path: string[]) {
  return join(process.cwd(), ...path);
}
