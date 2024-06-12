import { NextResponse } from "next/server";
import quran from "@/db/quran.json";
export function GET() {
  return NextResponse.json(quran.chapters);
}
