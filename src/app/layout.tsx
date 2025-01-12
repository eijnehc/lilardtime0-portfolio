import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { PersonalBestsDrawer } from "@/components/PersonalBestsDrawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Moved min-h-screen to body and added flex flex-col */}
        {/* Desktop Navigation */}
        <nav className="hidden lg:block bg-white shadow-md dark:bg-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Shaun Goh
                </h1>
              </div>
              <div className="flex space-x-8 items-center">
                <Link
                  href="/races"
                  className="text-gray-900 dark:text-white hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <h1 className="text-xm font-bold">Races</h1>
                </Link>
                <Link
                  href="/progress"
                  className="text-gray-900 dark:text-white hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <h1 className="text-xm font-bold">Progress</h1>
                </Link>
                <Link
                  href="/personal_bests"
                  className="text-gray-900 dark:text-white hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <h1 className="text-xm font-bold">Personal Bests</h1>
                </Link>
                <Link
                  href="/upcoming_races"
                  className="text-gray-900 dark:text-white hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <h1 className="text-xm font-bold">Upcoming Races</h1>
                </Link>
                <Link
                  href="/about"
                  className="text-gray-900 dark:text-white hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <h1 className="text-xm font-bold">About Me</h1>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">{children}</main>
        {/* Added main tag with flex-grow */}

        {/* Mobile Navigation */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0">
          <div className="relative">
            {/* PB Drawer */}
            <PersonalBestsDrawer />

            {/* Bottom Navigation Bar */}
            <div className="flex justify-between items-center h-16 bg-white dark:bg-gray-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
              <Link
                href="/races"
                className="flex-1 flex justify-center items-center text-gray-900 dark:text-white hover:text-green-600 px-3 py-2 text-sm font-medium"
              >
                Races
              </Link>
              <Link
                href="/progress"
                className="flex-1 flex justify-center items-center text-gray-900 dark:text-white hover:text-green-600 px-3 py-2 text-sm font-medium"
              >
                Progress
              </Link>
              <div className="flex-1" /> {/* Spacer for PB button */}
              <Link
                href="/upcoming_races"
                className="flex-1 flex justify-center items-center text-gray-900 dark:text-white hover:text-green-600 px-3 py-2 text-sm font-medium"
              >
                Races
              </Link>
              <Link
                href="/about"
                className="flex-1 flex justify-center items-center text-gray-900 dark:text-white hover:text-green-600 px-3 py-2 text-sm font-medium"
              >
                About
              </Link>
            </div>
          </div>
        </nav>
      </body>
    </html>
  );
}
