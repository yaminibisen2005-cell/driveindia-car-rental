import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const About = () => {
  const stats = [
    { number: "50+", label: "Premium Cars" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "15+", label: "Cities Covered" },
    { number: "4.9★", label: "Customer Rating" }
  ];

  const values = [
    {
      title: "Safety First",
      description: "Our vehicles are strictly sanitized, undergo multi-point inspections, and are equipped with modern safety features before every trip."
    },
    {
      title: "Complete Transparency",
      description: "No hidden charges, no surprise fees. What you see on our booking form is exactly what you pay."
    },
    {
      title: "24/7 Roadside Support",
      description: "No matter where you travel in India, our emergency roadside assistance and support teams are always available to help."
    },
    {
      title: "Premium Experience",
      description: "From luxury cruisers to budget hatchbacks, we deliver a premium, seamless digital booking and driving experience."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Banner Section */}
      <section className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 animate-slide-down">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-sans">About DriveIndia</h1>
          <p className="text-blue-100 text-lg sm:text-xl mt-4 max-w-2xl mx-auto font-light leading-relaxed">
            We are redefining the self-drive car rental space in India by putting safety, quality, and transparent pricing at the heart of every journey.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-10 relative z-10 max-w-5xl mx-auto px-4 w-full animate-scale-in delay-200">
        <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1 hover:scale-105 transition-transform duration-300">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#2563EB] block">{stat.number}</span>
              <span className="text-xs sm:text-sm font-semibold text-[#475569] uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up delay-300">
            <span className="text-[#38BDF8] font-bold text-sm uppercase tracking-wider block">Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-snug">Simplifying Travel Across India</h2>
            <p className="text-[#475569] leading-relaxed text-sm sm:text-base">
              Founded with the vision to make premium self-drive rentals accessible and trustworthy, DriveIndia has grown into a fleet of over 50 vehicles operating in major cities. We eliminate the tedious paperwork and high security deposits commonly associated with renting cars.
            </p>
            <p className="text-[#475569] leading-relaxed text-sm sm:text-base">
              Whether you need a quick hatchback to navigate city traffic, a luxury sedan for corporate visits, or a robust SUV to explore mountain terrains, we provide fully sanitized cars with flexible rental terms.
            </p>
          </div>
          <div className="relative flex justify-center items-center animate-fade-in delay-500">
            {/* Decorative colored box */}
            <div className="absolute inset-0 bg-[#38BDF8]/10 rounded-2xl transform rotate-3 -z-10 animate-float"></div>
            <img
              src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=600"
              alt="DriveIndia Fleet"
              className="rounded-2xl shadow-lg border border-slate-100 object-cover w-full max-w-lg aspect-video lg:aspect-auto hover:scale-[1.02] transition-transform duration-550 ease-out"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in delay-200">
            <span className="text-[#2563EB] font-bold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl font-bold text-[#0F172A] mt-2">What Drives Us Forward</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-150 card-hover-effect hover:border-[#2563EB]/40 animate-slide-up"
                style={{ animationDelay: `${idx * 150 + 200}ms` }}
              >
                <h3 className="text-lg font-bold text-[#0F172A] flex items-center gap-3">
                  <span className="w-2.5 h-6 rounded-full bg-[#F97316] inline-block animate-pulse"></span>
                  {value.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed mt-3 pl-5 border-l border-slate-200">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
