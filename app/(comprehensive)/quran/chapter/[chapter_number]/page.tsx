export default function ChapterPage({
  params
}: {
  params: { chapter_number: string };
}) {
  return <div>{params.chapter_number}</div>;
}
