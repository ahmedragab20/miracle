import Link from "next/link";
import { ShadowInnerIcon } from "@radix-ui/react-icons";
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-black text-white">
        <nav className="container mx-auto py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <ShadowInnerIcon />
            Miracle
          </Link>
          <div>
            <Link href="/listen" className="text-xs underline">
              Quran
            </Link>
          </div>
        </nav>
      </header>
      <main className="min-h-screen bg-black text-white pb-10">{children}</main>
      <footer className="py-10 text-center bg-black text-white">
        Alhamdullah <small>♥️</small>
      </footer>
    </>
  );
}
