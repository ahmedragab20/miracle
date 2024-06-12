import { unstable_noStore } from "next/cache";

export async function getQuranItems() {
  try {
    unstable_noStore();
    return await fetch(`http://localhost:3000/api/quran`, {
      next: { revalidate: 30 }
    }).then(res => res.json());
  } catch (error) {
    console.error(error);
  }
}
