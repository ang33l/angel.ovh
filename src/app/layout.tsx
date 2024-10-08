import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aleksander Marek - Fullstack Dev",
  description: "Aleksander Marek - Fullstack Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col lg:flex-row gap-12 w-full p-4 max-w-screen-2xl mx-auto min-h-[100dvh]">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
