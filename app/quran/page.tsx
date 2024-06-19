import { Suspense } from "react";
import { getQuranItems } from "./_data-fetching/quran";
import type { IChapter } from "@/types/apis/quran";
import QuranList from "./_components/QuranList";

export default async function Quran() {
  const quran = await getQuranItems<IChapter[]>();

  return (
    <div className="mt-5 container mx-auto">
      <Suspense fallback={null}>
        <div>
          {quran?.length ? (
            <QuranList quran={quran} />
          ) : (
            <div className="text-center mt-10 text-red-500">
              something went wrong! sorry.
            </div>
          )}
        </div>
      </Suspense>
    </div>
  );
}
