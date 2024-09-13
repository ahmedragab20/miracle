import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { chapter_number: string } }
) {
  const URL = `http://api.alquran.cloud/v1/surah/${params.chapter_number}`;
  const URL_EN = `http://api.alquran.cloud/v1/surah/${params.chapter_number}/en.asad`;
  const res = await fetch(URL);
  const data = await res.json();
  const res_en = await fetch(URL_EN);
  const data_en = await res_en.json();
  console.log({ data, data_en });

  return NextResponse.json({ data: { ar: data, en: data_en } });
}
