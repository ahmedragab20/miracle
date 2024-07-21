import "./globals.css";

import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
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
        {children}
      </body>
    </html>
  );
}
