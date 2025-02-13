import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Header() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Use outerSpace when not scrolled, greenWhite when scrolled
  const textColor = scrolled ? "text-greenWhite" : "text-outerSpace";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 py-4 transition-all ${
        scrolled ? "bg-outerSpace shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className={`text-3xl font-bold tracking-wide ${textColor}`}>
          RoboThink Central Illinois
        </h1>
        <nav>
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg
                className={`w-6 h-6 ${textColor}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <ul className={`md:flex space-x-6 text-lg font-medium ${menuOpen ? "block" : "hidden"} md:block`}>
            {["about", "programs", "testimonials", "contact"].map((section) => (
              <li key={section}>
                <Link
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className={`${textColor} hover:text-yellow-400 transition`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}