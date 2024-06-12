import { headers } from "next/headers";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBaseURL() {
  const protocol = headers().get("x-forwarded-proto"); // http
  const host = headers().get("x-forwarded-host"); // localhost:3000
  const url = `${protocol}://${host}`;
  return url;
}
