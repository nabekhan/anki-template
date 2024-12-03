import fs from 'node:fs/promises';

export function ensureValue(value) {
  return typeof value === 'function' ? value() : value;
}

export async function readJson(path) {
  return JSON.parse(
    await fs.readFile(path, {
      encoding: 'utf-8',
    }),
  );
}
