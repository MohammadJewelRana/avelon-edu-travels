import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import logo from "../assets/logo/avelon.jpg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Study Abroad", path: "/study-abroad" },
    { name: "Tour", path: "/tour" },
    { name: "Business Visa", path: "/business-visa" },
    { name: "Medical Visa", path: "/medical-visa" },
 
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-yellow-400"
        : "text-white/80 hover:text-yellow-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
 <Link to="/" className="flex flex-col leading-none  ">
  <img
    src={logo}
    alt="Avelon Edu & Travel"
    className="h-16 w-auto object-contain rounded-md"
  />
 
</Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((item) => (
            <NavLink key={item.name} to={item.path} className={linkClass}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:scale-[1.03] hover:from-yellow-400 hover:to-yellow-300 hover:text-black"
          >
            Free Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 text-white transition hover:bg-white/10 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenuAlt3 className="text-2xl" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 bg-zinc-950 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4" aria-label="Mobile navigation">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `border-b border-white/5 py-3 text-sm font-medium transition ${
                  isActive ? "text-yellow-400" : "text-white/80 hover:text-yellow-400"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:from-yellow-400 hover:to-yellow-300 hover:text-black"
          >
            Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;