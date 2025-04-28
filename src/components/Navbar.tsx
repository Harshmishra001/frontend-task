import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          <div className="flex items-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
              <path d="M4.5 6.5L7.5 3.5M7.5 3.5L10.5 6.5M7.5 3.5V13.5M19.5 6.5L16.5 3.5M16.5 3.5L13.5 6.5M16.5 3.5V13.5M4.5 17.5L7.5 20.5M7.5 20.5L10.5 17.5M7.5 20.5V10.5M19.5 17.5L16.5 20.5M16.5 20.5L13.5 17.5M16.5 20.5V10.5"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ marginLeft: '8px' }}>FakeStore</span>
          </div>
        </Link>
        <div className="navbar-links">
          <Link href="/" className="navbar-link">
            Products
          </Link>
          <Link href="/" className="btn btn-primary">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
