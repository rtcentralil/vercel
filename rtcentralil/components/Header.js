import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(); // Detects current route

  // Use outerSpace when not scrolled, greenWhite when scrolled
  const textColor = scrolled ? "text-greenWhite" : "text-outerSpace";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Function to handle smooth scrolling for section links
  const handleScrollToSection = (e, section) => {
    e.preventDefault();
    setMenuOpen(false);

    if (router.pathname !== "/") {
      // Redirect to home page and scroll after navigation
      router.push(`/#${section}`);
    } else {
      // Scroll to section smoothly
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <nav aria-label="Main navigation">
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
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
            {["about", "programs", "testimonials", "blog", "contact"].map((section) => (
              <li key={section}>
                {section === "blog" ? (
                  <Link
                    href="/blog"
                    onClick={() => setMenuOpen(false)}
                    className={`${textColor} hover:text-yellow-400 transition`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                ) : (
                  <a
                    href={`#${section}`}
                    onClick={(e) => handleScrollToSection(e, section)}
                    className={`${textColor} hover:text-yellow-400 transition cursor-pointer`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
