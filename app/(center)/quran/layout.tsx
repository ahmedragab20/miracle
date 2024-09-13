import { ShadowInnerIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <nav className="container mx-auto py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <ShadowInnerIcon />
            Miracle
          </Link>
          <div>
            <Link href="/listen" className="text-xs underline">
              Listen
            </Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="mt-10 py-10 text-center">
        Alhamdullah <small>❤️</small>
      </footer>
    </>
  );
}
