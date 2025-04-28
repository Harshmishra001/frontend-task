import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">
          {children}
        </main>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div>
                <h3 className="navbar-brand">FakeStore</h3>
                <p style={{ marginTop: '1rem', opacity: 0.9, maxWidth: '400px' }}>
                  Your one-stop shop for all your fake shopping needs. Browse our collection of products from the FakeStore API.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.75rem' }}>Quick Links</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><Link href="/" className="navbar-link">Home</Link></li>
                  <li><Link href="/" className="navbar-link">Products</Link></li>
                  <li><Link href="/" className="navbar-link">About</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright">
              © {new Date().getFullYear()} FakeStore. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}