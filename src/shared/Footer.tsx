// Footer.jsx
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

import logo from "../assets/logo/avelon.jpg";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Study Abroad", path: "/study-abroad" },
    { name: "Tour", path: "/tour" },
    { name: "Business Visa", path: "/business-visa" },
    { name: "Medical Visa", path: "/medical-visa" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Student Visa",
    "Tour Packages",
    "Visit Visa",
    "Air Ticket",
    "Work Permit",
  ];

  const socialLinks = [
    { Icon: FaFacebookF, href: "#", label: "Facebook" },
    { Icon: FaInstagram, href: "#", label: "Instagram" },
    { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { Icon: FaWhatsapp, href: "#", label: "WhatsApp" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-white">
 

      {/* Ambient glows */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-red-600/15 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + About */}
          <div>
            <img
              src={logo}
              alt="Avelon Edu & Travel"
              className="h-16 w-auto rounded-md"
            />

            <p className="mt-6 max-w-sm leading-7 text-zinc-400">
              Trusted visa consultancy, international education guidance, and
              premium travel support for students and travelers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-yellow-400">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center text-zinc-400 transition-all duration-300 hover:translate-x-2 hover:text-yellow-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-yellow-400">
              Our Services
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-zinc-400 transition hover:text-white"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (no card, simple list) */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-yellow-400">
              Contact Us
            </h3>

            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600/15 text-red-400">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <span className="pt-2 text-zinc-300">Dhaka, Bangladesh</span>
              </div>

              {/* Phone */}
              <a
                href="tel:+8801XXXXXXXXX"
                className="flex items-center gap-4 transition hover:text-yellow-400"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600/15 text-red-400">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <span className="text-zinc-300">+880 1XXXXXXXXX</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@avelon.com"
                className="flex items-center gap-4 transition hover:text-yellow-400"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600/15 text-red-400">
                  <HiOutlineMail className="text-xl" />
                </div>
                <span className="text-zinc-300">info@avelon.com</span>
              </a>

              {/* Social icons */}
              <div className="mt-6 flex gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-yellow-400 hover:text-black"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-center">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-yellow-400">
              Avelon Edu & Travel
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;