import type { IChapter } from "@/types/apis/quran";
import QuranChapterCard from "./QuranChapterCard";

export default function QuranList({ quran }: { quran: IChapter[] }) {
  return (
    <div className="flex flex-wrap">
      {quran.map(q => {
        return <QuranChapterCard key={q.number} chapter={q} />;
      })}
    </div>
  );
}
