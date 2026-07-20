import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

import logo from "../assets/logo/avelon.jpg"
import { FaWhatsapp } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Study Abroad", path: "/study-abroad" },
    { name: "Tours", path: "/tour" },
    { name: "Business Visa", path: "/business-visa" },
    { name: "Medical Visa", path: "/medical-visa" },
 
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = ({ isActive }:any) =>
    `relative px-3 py-2 md:text-medium  lg:text-lg font-medium transition-all duration-300 ${
      isActive
        ? "text-yellow-400"
        : "text-white/80 hover:text-yellow-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 md:py-4">
 <Link to="/" className="flex flex-col leading-none  ">
  <img
    src={logo}
    alt="Avelon Edu & Travel"
    className="h-8 lg:h-16 w-auto object-contain rounded-md"
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
<a
  href="https://wa.me/8801XXXXXXXXX?text=Hello!%20I%20would%20like%20a%20free%20consultation."
  target="_blank"
  rel="noopener noreferrer"
  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-green-500/50 animate-pulse"
>
  {/* Glow */}
  <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />

  <FaWhatsapp className="relative text-xl animate-bounce" />

  <span className="relative">
     Call Now  
  </span>
</a>


        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <HiOutlineX className="text-lg" /> : <HiOutlineMenuAlt3 className="text-lg" />}
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

<a
  href="https://wa.me/8801XXXXXXXXX?text=Hello!%20I%20would%20like%20a%20free%20consultation."
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setIsOpen(false)}
  className="group mx-auto mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-green-500/50 animate-pulse"
>
  <FaWhatsapp className="text-lg animate-bounce" />
  <span>Free WhatsApp Consultation</span>
</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;