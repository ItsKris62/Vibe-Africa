import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] flex justify-between items-center px-6 py-3 
        bg-[#297373] transition-all duration-300 rounded-[20px] shadow-lg
        ${scrolled ? "bg-opacity-90 shadow-2xl" : "bg-opacity-70"}
      `}
    >
      {/* Logo */}
      <div className="text-white text-2xl font-bold tracking-wide">
        <Link href="/">VibraAfrika</Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/about" className="text-white hover:text-[#85FFC7] transition">
          About
        </Link>
        <Link href="/events" className="text-white hover:text-[#85FFC7] transition">
          Events
        </Link>
        <Link href="/contact" className="text-white hover:text-[#85FFC7] transition">
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      <button className="md:hidden text-white">☰</button>
    </nav>
  );
};

export default Navbar;
