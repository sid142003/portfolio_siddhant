import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  { id: 0, name: "home", href: "#home" },
  { id: 1, name: "skills", href: "#skills" },
  { id: 2, name: "works", href: "#works" },
  { id: 3, name: "resume", href: "#resume" },
  { id: 4, name: "contact", href: "#contact" },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const gotoemail = () => {
    window.location.href = "mailto:siddhant.rbl2016@gmail.com";
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f0f]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/"
          className="text-2xl font-black text-white hover:text-yellow-400 transition-colors"
        >
          Siddhant<span className="text-yellow-400">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="flex items-center gap-8 md:hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 font-semibold text-sm uppercase tracking-wider transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
          <a
            onClick={gotoemail}
            className="cursor-pointer bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold hover:bg-yellow-300 transition-all text-sm"
          >
            Hire Me
          </a>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-white hover:border-yellow-400/50 transition-all"
        >
          {isOpen ? <RxCross2 size={20} /> : <HiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="hidden md:block absolute top-full left-0 w-full bg-[#0f0f0f]/98 backdrop-blur-xl border-b border-white/10 px-4 py-6">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-200 hover:text-yellow-400 font-bold text-lg uppercase tracking-wider transition-colors py-1"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              onClick={() => { gotoemail(); setIsOpen(false); }}
              className="cursor-pointer mt-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold text-center hover:bg-yellow-300 transition-all"
            >
              Hire Me
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
