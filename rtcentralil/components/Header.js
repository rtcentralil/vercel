import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Header() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 text-white py-4 transition-all ${
        scrolled ? "bg-[#003366] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold tracking-wide">RoboThink Central Illinois</h1>
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            {["about", "programs", "testimonials", "contact"].map((section) => (
              <li key={section}>
                <Link href={`#${section}`} className="hover:text-yellow-400 transition">
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