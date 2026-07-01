import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/cars", label: "Cars" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold flex items-center tracking-tight">
              <span className="text-[#2563EB]">Drive</span>
              <span className="text-[#38BDF8] font-semibold">India</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center font-sans">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-200 relative py-1.5 ${
                    isActive 
                      ? "text-[#2563EB] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#2563EB] after:rounded-full" 
                      : "text-[#475569] hover:text-[#2563EB]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/login"
              className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0F172A] hover:text-[#2563EB] focus:outline-none transition-colors"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 py-4 px-4 space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-[#2563EB]/5 text-[#2563EB] font-semibold" 
                    : "text-[#475569] hover:bg-slate-50 hover:text-[#2563EB]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-slate-100 mt-2">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block bg-[#2563EB] text-white text-center py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
