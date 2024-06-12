import { getQuranItems } from "./_data-fetching/quran";

export default async function Quran() {
  const quran = await getQuranItems();

  return (
    <>
      <div>{new Date().getTime()}</div>
      <div className="text-center font-sans">{JSON.stringify(quran)}</div>
    </>
  );
}
