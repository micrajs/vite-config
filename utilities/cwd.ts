import { join } from 'path';

module.exports.cwd = (...path: string[]) => join(process.cwd(), ...path);
