import "./globals.css";

import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { ShadowInnerIcon } from "@radix-ui/react-icons";
import Link from "next/link";
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});
const UthmanTN1 = localFont({
  src: "../assets/fonts/quran-font.ttf",
  variable: "--font-arabic-uthman-tn1"
});

export const metadata: Metadata = {
  title: "Miracle",
  description:
    "A Quran App hopes to help the new muslims understand the book and interact with it"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${UthmanTN1.variable} font-playfair`}
      >
        <header>
          <nav className="container mx-auto py-1 h-9 flex items-center">
            <Link href="/" className="flex items-center gap-1">
              <ShadowInnerIcon />
              Miracle
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
