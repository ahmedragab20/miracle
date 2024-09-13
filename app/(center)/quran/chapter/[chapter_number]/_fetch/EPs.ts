export async function getChapter<T>(
  chapter_number: string
): Promise<T | undefined> {
  try {
    return (await fetch(
      `http://localhost:3000/api/quran/chapter/${chapter_number}`
    ).then(res => res.json())) as T;
  } catch (error) {
    console.error(error);
  }
}
