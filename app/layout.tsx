import type { Metadata } from "next";
import { Rubik, Staatliches } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const staatliches = Staatliches({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-staatliches",
});

export const metadata: Metadata = {
  title: "Just Stay Living",
  description: "Complete Home Solutions: Makeover & Rent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${staatliches.variable} ${rubik.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
