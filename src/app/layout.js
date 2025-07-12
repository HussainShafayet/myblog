import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "blog",
  description: "A simple blog built with Next.js",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>MyBlog</title>
      </head>
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable}
          antialiased bg-gradient-to-b from-white via-blue-50 to-white
          dark:bg-gradient-to-b dark:from-zinc-900 dark:via-zinc-800 dark:to-black
          text-gray-900 dark:text-gray-100
          font-sans
          min-h-screen
          flex flex-col
          selection:bg-blue-400 selection:text-white
          transition-colors duration-300
        `}
      >
        <Navbar />

        <main className="flex-grow max-w-6xl w-full mx-auto px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 py-20 sm:py-24 md:py-32 lg:py-36">
          {children}
        </main>

        <Footer className="border-t border-gray-200 dark:border-zinc-700 px-10 sm:px-14 md:px-20 lg:px-24 xl:px-32 py-8 sm:py-10 md:py-12" />
      </body>
    </html>
  )
}


