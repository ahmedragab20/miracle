import type { IChapter } from "@/types/apis/quran";
import Link from "next/link";

export default function QuranChapterCard({ chapter }: { chapter: IChapter }) {
  return (
    <Link
      className="px-5 pt-2 pb-4 hover:bg-gray-100 border border-gray-100 sm:w-1/2 md:w-1/3 w-full overflow-hidden"
      href={`/quran/chapter/${chapter.number}`}
    >
      <div className=" max-w-full truncate">
        <strong className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-400 to-gray-800 space-x-2">
          <span className="flex-shrink-0">{chapter.number}</span>
          <span className="text-xs">{chapter.englishTranslated}</span>
        </strong>
      </div>
      <div className="w-full flex mt-4 justify-between gap-1">
        <div>{chapter.english}</div>

        <div className="font-uthman">{chapter.arabicWithTashkeel}</div>
      </div>
    </Link>
  );
}
