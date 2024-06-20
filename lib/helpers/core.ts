/**
 * checks for the browser's window object availability
 */
export function isBrowser() {
  return typeof window !== "undefined";
}

/**
 * checks whether or not you're on the development environment
 */
export function isDev() {
  return process.env.NODE_ENV === "development";
}

function generateRandomHex(length: number): string {
  return Array.from({ length }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join("");
}

function generateUUIDv4(): string {
  return `${generateRandomHex(8)}-${generateRandomHex(4)}-4${generateRandomHex(
    3
  )}-${(Math.floor(Math.random() * 4) + 8).toString(16)}${generateRandomHex(
    3
  )}-${generateRandomHex(12)}`;
}

export function uuid(): string {
  return `${generateUUIDv4()}-${Date.now()}`;
}
