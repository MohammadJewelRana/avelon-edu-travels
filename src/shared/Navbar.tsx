import logo1 from "../assets/logo/logo.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaTwitter,
  FaHome,
  FaUsers,
  FaBuilding,
  FaPhone,
} from "react-icons/fa";
import { useEffect } from "react";
import { handleScrollToTop } from "./Footer";
 

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  

useEffect(() => {
  if (menuOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return () => {
    document.body.classList.remove("overflow-hidden"); // Cleanup when unmounting
  };
}, [menuOpen]);


  const navItems = [
    { id: 1, title: "Home", path: "/", icon: <FaHome /> },
    {
      id: 3,
      title: "Our Sister Concern",
      path: "/sister-concern",
      icon: <FaBuilding />,
    },
    { id: 4, title: "Management Team", path: "/management", icon: <FaUsers /> },
    { id: 5, title: "Contact", path: "/contact", icon: <FaPhone /> },
  ];

  

  return (
    <header className="sticky top-0 z-50 bg-black shadow-md border"> 
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo1} className="h-10" alt="Logo" />
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              className="text-3xl text-white"
              onClick={() => setMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>
       

          {/* Desktop Links */}
          <div className="hidden md:flex flex-grow justify-center text-lg text-white">
  <div className="flex space-x-8">
    {navItems.map((item) => (
      <Link
        key={item.id}
        to={item.path}
        onClick={handleScrollToTop}
        className={`flex items-center gap-2 hover:text-yellow-400 ${
          location.pathname === item.path ? "text-[#F7BE15] font-semibold" : ""
        }`}
      >
        {item.title}
      </Link>
    ))}
  </div>
</div>
        </div>

     

        {/* Mobile Menu Drawer (from left side) */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black text-white shadow-lg transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}   
        >
          {/* Close Button */}
          <div className="flex justify-between items-center bg-yellow-500 py-6 px-4">
            <Link to="/">
              <img src={logo1} className="h-16" alt="Logo" />
            </Link>
            <button
              className="text-white text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          {/* Mobile Nav Items */}
          <div className="flex flex-col mt-6 space-y-4 pl-6 pb-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center gap-3 text-xl py-3 px-4 border-b border-gray-700 transition duration-300 ${
                  location.pathname === item.path
                    ? "text-yellow-400 font-bold"
                    : "text-white"
                }`}
                onClick={() => {
                  setMenuOpen(false);
                  handleScrollToTop();
                }}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-1 w-full bg-yellow-400 my-6"></div>

          {/* Social Links */}
          <div className="pl-6 pb-12">
            <p className="text-xl">Follow Us</p>
            <div className="flex gap-6 pt-4">
              <Link to="#" className="group">
                <FaFacebook className="text-3xl text-[#F7BE15] group-hover:text-[#1877F2] transition-colors duration-300" />
              </Link>
              <Link to="#" className="group">
                <FaInstagram className="text-3xl text-[#F7BE15] group-hover:text-[#C13584] transition-colors duration-300" />
              </Link>
              <Link to="#" className="group">
                <FaLinkedin className="text-3xl text-[#F7BE15] group-hover:text-[#0077B5] transition-colors duration-300" />
              </Link>
              <Link to="#" className="group">
                <FaTwitter className="text-3xl text-[#F7BE15] group-hover:text-[#1DA1F2] transition-colors duration-300" />
              </Link>
            </div>
          </div>

 

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
