import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-teal-700 shadow-md py-4 px-6 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-8 h-8">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white">
              <path d="M4.5 6.5L7.5 3.5M7.5 3.5L10.5 6.5M7.5 3.5V13.5M19.5 6.5L16.5 3.5M16.5 3.5L13.5 6.5M16.5 3.5V13.5M4.5 17.5L7.5 20.5M7.5 20.5L10.5 17.5M7.5 20.5V10.5M19.5 17.5L16.5 20.5M16.5 20.5L13.5 17.5M16.5 20.5V10.5"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-white">FakeStore</span>
        </Link>
        <div className="flex space-x-4 items-center">
          <Link href="/" className="text-teal-100 hover:text-white transition-colors">
            Products
          </Link>
          <Link href="/" className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-md transition-colors">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
