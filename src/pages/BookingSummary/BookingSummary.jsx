import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaCar, FaUser, FaCalendarAlt, FaMapMarkerAlt, FaPrint, FaArrowLeft, FaRoad } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const BookingSummary = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const savedBooking = localStorage.getItem("latestBooking");
    if (savedBooking) {
      setBooking(JSON.parse(savedBooking));
    } else {
      navigate("/booking");
    }
  }, [navigate]);

  if (!booking) {
    return (
      <div className="bg-[#F8FAFC] min-h-screen flex items-center justify-center font-sans">
        <div className="text-center font-semibold text-[#2563EB]">Loading invoice details...</div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col font-sans print:bg-white overflow-x-hidden">
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center mb-8 relative overflow-hidden animate-scale-in">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500"></div>
          <div className="text-emerald-500 flex justify-center mb-4">
            <FaCheckCircle className="animate-bounce-tick" style={{ fontSize: "64px" }} />
          </div>
          <h1 className="text-3xl font-bold text-[#0F172A] animate-fade-in delay-200">Booking Confirmed!</h1>
          <p className="text-[#475569] text-sm mt-2 max-w-md mx-auto animate-fade-in delay-300">
            Your vehicle has been successfully reserved. A confirmation invoice with route details and pickup schedules has been sent to <span className="font-semibold text-[#0F172A]">{booking.email}</span>.
          </p>
          <div className="mt-4 inline-block bg-emerald-50 text-emerald-800 text-xs font-semibold px-4 py-1.5 rounded-full border border-emerald-100 uppercase tracking-wider animate-fade-in delay-400">
            Booking ID: DI-{Math.floor(100000 + Math.random() * 900000)}
          </div>
        </div>

        {/* Detailed Summary Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-8 animate-slide-up delay-200 card-hover-effect">
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-bold text-[#0F172A] text-lg">Reservation Summary</h2>
            <button
              onClick={handlePrint}
              className="text-xs font-bold text-[#2563EB] hover:text-[#2563EB]/85 flex items-center gap-1.5 print:hidden bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer btn-hover-effect"
            >
              <FaPrint /> Print Invoice
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Split layout: Car info & Customer Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-slate-100">
              {/* Car Info */}
              <div className="flex gap-4">
                <img
                  src={booking.carImage}
                  alt={booking.carName}
                  className="w-28 h-20 object-cover rounded-xl border border-slate-200 hover:scale-105 transition-transform duration-300"
                />
                <div>
                  <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider block">Vehicle</span>
                  <h3 className="text-lg font-bold text-[#0F172A] mt-0.5">{booking.carName}</h3>
                  <span className="text-xs text-slate-500 mt-1 block">₹{booking.carRatePerKm} / km</span>
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-1 text-sm text-[#475569]">
                <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider block">Renter Details</span>
                <span className="text-[#0F172A] font-bold block flex items-center gap-1.5 mt-1 hover:translate-x-0.5 transition-transform">
                  <FaUser className="text-[#2563EB]" size={12} /> {booking.fullName}
                </span>
                <span className="block">{booking.countryDialCode} {booking.phone}</span>
                <span className="block text-xs text-slate-400">
                  {booking.chauffeur ? "DL: Not required (Chauffeur Service Active)" : `DL: ${booking.idNumber}`}
                </span>
              </div>
            </div>

            {/* Route & Schedule Section */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 pb-8 border-b border-slate-100 text-sm">
              <div className="hover:translate-y-[-2px] transition-transform duration-300">
                <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider block mb-1">Pickup (From)</span>
                <div className="flex items-center gap-2 text-[#0F172A] font-semibold">
                  <FaMapMarkerAlt className="text-[#2563EB]" /> {booking.pickupLocation}
                </div>
              </div>
              <div className="hover:translate-y-[-2px] transition-transform duration-300">
                <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider block mb-1">Destination (To)</span>
                <div className="flex items-center gap-2 text-[#0F172A] font-semibold">
                  <FaMapMarkerAlt className="text-[#2563EB]" /> {booking.dropoffLocation}
                </div>
              </div>
              <div className="hover:translate-y-[-2px] transition-transform duration-300">
                <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider block mb-1">Pickup Schedule</span>
                <div className="flex items-center gap-2 text-[#0F172A] font-semibold">
                  <FaCalendarAlt className="text-[#2563EB]" /> {booking.pickupDate} at {booking.pickupTime}
                </div>
              </div>
              <div className="hover:translate-y-[-2px] transition-transform duration-300">
                <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider block mb-1">Return Schedule</span>
                <div className="flex items-center gap-2 text-[#0F172A] font-semibold">
                  <FaCalendarAlt className="text-[#2563EB]" /> {booking.returnDate} at {booking.returnTime}
                </div>
              </div>
            </div>

            {/* Price Calculations */}
            <div>
              <span className="text-xs font-semibold text-[#475569] uppercase tracking-wider block mb-4">Fare Breakdown</span>
              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between text-[#475569]">
                  <span>Total Distance</span>
                  <span className="font-semibold text-[#0F172A] flex items-center gap-1.5"><FaRoad className="text-slate-400" /> {booking.distance} km</span>
                </div>

                <div className="flex justify-between text-[#475569]">
                  <span>Car Distance Rate</span>
                  <span className="font-semibold text-[#0F172A]">₹{booking.carRatePerKm} / km</span>
                </div>

                <div className="flex justify-between text-[#475569]">
                  <span>Distance Fare Subtotal</span>
                  <span className="font-semibold text-[#0F172A]">₹{booking.carRatePerKm * booking.distance}</span>
                </div>

                {/* Add-ons detailed list */}
                {(booking.gps || booking.insurance || booking.childSeat || booking.chauffeur) && (
                  <div className="bg-slate-50/50 p-4 rounded-xl space-y-2 border border-slate-100">
                    <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">Active Add-ons (Flat Fees)</span>
                    {booking.chauffeur && (
                      <div className="flex justify-between text-[#475569] text-xs">
                        <span>Chauffeur Service</span>
                        <span className="font-semibold text-[#0F172A]">₹2000</span>
                      </div>
                    )}
                    {booking.gps && (
                      <div className="flex justify-between text-[#475569] text-xs">
                        <span>GPS Navigation</span>
                        <span className="font-semibold text-[#0F172A]">₹500</span>
                      </div>
                    )}
                    {booking.insurance && (
                      <div className="flex justify-between text-[#475569] text-xs">
                        <span>Full Protection</span>
                        <span className="font-semibold text-[#0F172A]">₹1500</span>
                      </div>
                    )}
                    {booking.childSeat && (
                      <div className="flex justify-between text-[#475569] text-xs">
                        <span>Child Safety Seat</span>
                        <span className="font-semibold text-[#0F172A]">₹300</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="border-t border-slate-150 pt-4 flex justify-between text-base font-bold text-[#0F172A]">
                  <span>Total Amount Paid</span>
                  <span className="text-[#2563EB] text-xl font-extrabold animate-pulse-glow px-2 py-0.5 rounded-lg">₹{booking.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center print:hidden animate-fade-in delay-500">
          <Link
            to="/cars"
            className="flex items-center gap-2 border-2 border-slate-200 hover:border-[#2563EB] hover:text-[#2563EB] text-[#0F172A] px-6 py-3.5 rounded-xl font-bold transition-all duration-200 btn-hover-effect"
          >
            <FaArrowLeft size={12} /> Return to Fleet
          </Link>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default BookingSummary;
