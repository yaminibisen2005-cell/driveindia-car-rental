import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#0F172A] text-slate-400 pt-16 pb-8 border-t border-slate-850 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        
        {/* Column 1: Company Profile (ColSpan 4) */}
        <div className="md:col-span-4 space-y-4">
          <Link to="/" className="text-2xl font-bold text-white flex items-center tracking-tight">
            <span className="text-[#2563EB]">Drive</span>
            <span className="text-[#38BDF8] font-semibold">India</span>
          </Link>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
            DriveIndia is the leading self-drive and chauffeur car rental platform in India. Rent highly-maintained cars at competitive pricing with a completely digital checkout experience.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-3 pt-2">
            <a
              href="#"
              className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center hover:bg-[#2563EB] text-white hover:scale-105 transition-all"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center hover:bg-[#2563EB] text-white hover:scale-105 transition-all"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center hover:bg-[#2563EB] text-white hover:scale-105 transition-all"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center hover:bg-[#2563EB] text-white hover:scale-105 transition-all"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links (ColSpan 2) */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li>
              <Link to="/" className="hover:text-[#38BDF8] transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/cars" className="hover:text-[#38BDF8] transition-colors">Our Fleet</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#38BDF8] transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#38BDF8] transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info (ColSpan 3) */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Get in Touch</h3>
          <ul className="space-y-3.5 text-xs sm:text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#2563EB] mt-1 flex-shrink-0" />
              <span className="text-slate-400 leading-relaxed">12, Connaught Place, New Delhi, 110001, India</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#2563EB] flex-shrink-0" />
              <span className="text-slate-400 font-semibold">+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#2563EB] flex-shrink-0" />
              <span className="text-slate-400 font-semibold">support@driveindia.com</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter Subscription (ColSpan 3) */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Newsletter</h3>
          <p className="text-xs leading-relaxed text-slate-400">
            Subscribe to our newsletter to receive the latest updates, discount coupons, and pricing changes.
          </p>
          
          <form onSubmit={handleSubscribe} className="relative flex items-center">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-2.5 pl-4 pr-10 text-xs focus:outline-none focus:border-[#2563EB] transition-colors"
              required
            />
            <button
              type="submit"
              className="absolute right-1 text-white bg-[#2563EB] hover:bg-[#2563EB]/90 p-2 rounded-lg transition-colors cursor-pointer"
            >
              <FaPaperPlane size={10} />
            </button>
          </form>

          {subscribed && (
            <span className="block text-[10px] text-emerald-400 font-medium">
              Subscribed successfully! Check your inbox.
            </span>
          )}
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 pt-8 mt-8 flex flex-col sm:flex-row justify-between text-xs text-slate-500 gap-4">
        <span>© {new Date().getFullYear()} DriveIndia Car Rental. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-350 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-350 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
