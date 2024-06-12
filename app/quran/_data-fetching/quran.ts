export async function getQuranItems<T>(): Promise<T | undefined> {
  try {
    return (await fetch(`http://localhost:3000/api/quran`).then(res =>
      res.json()
    )) as T;
  } catch (error) {
    console.error(error);
  }
}
