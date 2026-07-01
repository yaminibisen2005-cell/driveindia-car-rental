import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitted: false,
        error: true,
        message: "Please fill in all required fields."
      });
      return;
    }

    setStatus({
      submitted: true,
      error: false,
      message: "Thank you for contacting DriveIndia! Our support team will reach out to you shortly."
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 animate-slide-down">
          <span className="text-[#38BDF8] font-bold text-xs uppercase tracking-widest block mb-2 tracking-wider">Get in Touch</span>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight font-sans">Contact Support & Sales</h1>
          <p className="text-blue-100 text-sm sm:text-base mt-3 max-w-xl mx-auto font-light leading-relaxed">
            We are here to support your rental queries 24/7. Reach out and experience premium assistance.
          </p>
        </div>
      </section>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Contact Info & Inquiry Form Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-8 animate-slide-up delay-200 card-hover-effect hover:border-[#2563EB]/25">
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A]">Get in Touch</h2>
              <p className="text-[#475569] text-sm mt-2 leading-relaxed">
                Reach out to us directly or visit our headquarters. We are available 24 hours a day, 7 days a week to support you.
              </p>

              <div className="space-y-6 mt-8">
                {/* Office Address */}
                <div className="flex gap-4 items-start hover:translate-x-1 transition-transform duration-300">
                  <span className="bg-[#2563EB]/10 text-[#2563EB] p-3.5 rounded-xl flex-shrink-0">
                    <FaMapMarkerAlt size={18} />
                  </span>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-sm">Office Address</h3>
                    <span className="text-[#475569] text-sm mt-1 block leading-relaxed">
                      12, Connaught Place, New Delhi, 110001, India
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-4 items-start hover:translate-x-1 transition-transform duration-300">
                  <span className="bg-[#2563EB]/10 text-[#2563EB] p-3.5 rounded-xl flex-shrink-0">
                    <FaPhoneAlt size={18} />
                  </span>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-sm">Phone Support</h3>
                    <span className="text-[#475569] text-sm mt-1 block font-semibold">+91 98765 43210</span>
                    <span className="text-slate-400 text-xs">(Available 24/7 for active rentals)</span>
                  </div>
                </div>

                {/* Support Email */}
                <div className="flex gap-4 items-start hover:translate-x-1 transition-transform duration-300">
                  <span className="bg-[#2563EB]/10 text-[#2563EB] p-3.5 rounded-xl flex-shrink-0">
                    <FaEnvelope size={18} />
                  </span>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-sm">Email Support</h3>
                    <span className="text-[#475569] text-sm mt-1 block font-semibold">support@driveindia.com</span>
                    <span className="text-slate-400 text-xs">For booking inquiries & issues</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="pt-6 border-t border-slate-100">
              <h4 className="font-bold text-[#0F172A] text-xs uppercase tracking-wider mb-3">Follow our updates</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 text-[#475569] flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-all hover:scale-110">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 text-[#475569] flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-all hover:scale-110">
                  <FaTwitter size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 text-[#475569] flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-all hover:scale-110">
                  <FaInstagram size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-slate-100 text-[#475569] flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-all hover:scale-110">
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between animate-slide-up delay-300 card-hover-effect hover:border-[#2563EB]/25">
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Send a Message</h2>
              <p className="text-[#475569] text-sm mb-6">Drop us a line and we'll respond within 2 hours during operational windows.</p>
              
              {status.submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-medium animate-scale-in">
                  {status.message}
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-sm font-medium animate-scale-in">
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-[#0F172A]">Full Name <span className="text-[#F97316]">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white transition-all duration-200"
                    required
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-[#0F172A]">Email Address <span className="text-[#F97316]">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white transition-all duration-200"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium text-[#0F172A]">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-[#0F172A]">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Booking inquiry, corporate rental, etc."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-[#0F172A]">Your Message <span className="text-[#F97316]">*</span></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white transition-all duration-200 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer btn-hover-effect"
                  >
                    <FaPaperPlane size={14} /> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Real Google Map Embed Iframe */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 overflow-hidden h-96 relative animate-scale-in delay-400">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.999726217435!2d77.21672101508272!3d28.630452982417622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37e3d645e9%3A0xcdcb9b0b4b245a4!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1682490000000!5m2!1sen!2sin"
            className="w-full h-full border-0 rounded-xl"
            allowFullScreen=""
            loading="lazy"
            title="DriveIndia HQ Map Location"
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
