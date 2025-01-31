import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] bg-white shadow-lg rounded-[20px] flex items-center justify-between px-6 py-3 z-50">
      {/* Logo */}
      <Link href="/">
        <a className="text-primary font-brolimo text-2xl">VibraAfrika</a>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-lg">
        {["Home", "Events", "About", "Contact"].map((item) => (
          <li key={item}>
            <Link href={`/${item.toLowerCase()}`}>
              <a
                className={`${
                  router.pathname === `/${item.toLowerCase()}` ? "text-accent font-bold" : "text-dark"
                } hover:text-accent transition duration-300`}
              >
                {item}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      {/* Auth Buttons */}
      <div className="hidden md:flex gap-4">
        <Link href="/login">
          <a className="px-4 py-2 border border-secondary rounded-md text-secondary hover:bg-secondary hover:text-white transition">
            Login
          </a>
        </Link>
        <Link href="/signup">
          <a className="px-4 py-2 bg-accent text-white rounded-md hover:bg-orange-500 transition">
            Signup
          </a>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-dark text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-white shadow-lg rounded-b-[20px] py-4 flex flex-col items-center gap-4 md:hidden">
          {["Home", "Events", "About", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              <a
                className={`${
                  router.pathname === `/${item.toLowerCase()}` ? "text-accent font-bold" : "text-dark"
                } text-lg hover:text-accent transition duration-300`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </Link>
          ))}

          {/* Auth Buttons for Mobile */}
          <div className="flex flex-col gap-2 w-full px-6">
            <Link href="/login">
              <a className="text-center px-4 py-2 border border-secondary rounded-md text-secondary hover:bg-secondary hover:text-white transition">
                Login
              </a>
            </Link>
            <Link href="/signup">
              <a className="text-center px-4 py-2 bg-accent text-white rounded-md hover:bg-orange-500 transition">
                Signup
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
