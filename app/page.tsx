import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="container mx-auto py-10 px-5">
        <div className="flex justify-center items-center flex-col gap-4 mt-10">
          <h2 className="text-3xl max-w-3xl text-center bg-clip-text  text-transparent bg-gradient-to-r from-gray-900 via-gray-500 to-gray-800">
            Surely this Quran guides to what is most upright, and gives good
            news to the believers—who do good—that they will have a mighty
            reward
          </h2>
          <h2 className="text-xl max-w-3xl text-center font-uthman  bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800">
            إِنَّ هَـٰذَا ٱلْقُرْءَانَ يَهْدِى لِلَّتِى هِىَ أَقْوَمُ
            وَيُبَشِّرُ ٱلْمُؤْمِنِينَ ٱلَّذِينَ يَعْمَلُونَ ٱلصَّـٰلِحَـٰتِ
            أَنَّ لَهُمْ أَجْرًۭا كَبِيرًۭا ٩
          </h2>
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/quran"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
          >
            Explore Quran
          </Link>
        </div>
      </section>
      <hr className="max-w-sm mx-auto" />
      {/* <section className="container mx-auto">
        <div className="flex gap-3">
          <div className="flex-1 border border-indigo-600"></div>
          <div className="flex-1 border border-sky-600"></div>
          <div className="flex-1 border border-green-600"></div>
        </div>
      </section> */}
    </>
  );
}
