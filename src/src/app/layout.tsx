import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FakeStore - Online Shopping",
  description: "Browse our collection of products from FakeStore API",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-gray-50 min-h-screen text-gray-800 font-sans">
        <Navbar />
        <main className="container mx-auto py-8 px-4 max-w-7xl">
          {children}
        </main>
        <footer className="bg-teal-800 text-teal-100 py-8 mt-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-4">FakeStore</h3>
                <p className="text-teal-200 max-w-md">
                  Your one-stop shop for all your fake shopping needs. Browse our collection of products from the FakeStore API.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/" className="hover:text-white transition-colors">Products</Link></li>
                  <li><Link href="/" className="hover:text-white transition-colors">About</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-teal-700 mt-8 pt-6 text-center text-teal-300 text-sm">
              © {new Date().getFullYear()} FakeStore. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
