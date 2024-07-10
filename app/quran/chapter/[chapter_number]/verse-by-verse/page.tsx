export default function ChapterVerseByVersePage({
  params
}: {
  params: { chapter_number: string };
}) {
  return (
    <div className="text-xl text-center py-28 bg-slate-100 font-sans">
      Chapter verse by verse {params.chapter_number}
    </div>
  );
}
