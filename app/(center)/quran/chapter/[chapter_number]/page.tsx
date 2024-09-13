import { use } from "react";
import { getChapter } from "./_fetch/EPs";

export default function ChapterPage({
  params
}: {
  params: { chapter_number: string };
}) {
  const chapter = use(getChapter(params.chapter_number));
  return (
    <div className="container mx-auto">
      <div>
        <pre>{JSON.stringify(chapter, null, 2)}</pre>
      </div>
    </div>
  );
}
