import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";

const geistFiraCode = Fira_Code({
  variable: "--font-fira-code",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haerul Mutakin",
  description: "My Professional Portfolio Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistFiraCode.variable} antialiased`}
      >
        <main className="w-[100%] md:w-8/12 px-2 md:px-0 mx-auto h-[100dvh]">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
