export default function ChapterPage({
  params
}: {
  params: { chapter_number: string };
}) {
  return <div className="container mx-auto">{params.chapter_number}</div>;
}
