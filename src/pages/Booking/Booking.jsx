import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FaCar, FaUser, FaPhone, FaEnvelope, FaIdCard, FaCalendarAlt, FaMapMarkerAlt, FaChevronRight, FaRoad, FaSpinner } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { cars } from "../../data/cars";
import { countries as countriesList } from "../../data/countries";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const carIdParam = searchParams.get("carId");

  const [selectedCar, setSelectedCar] = useState(cars[0]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    idNumber: "",
    pickupLocation: "Delhi",
    dropoffLocation: "Jaipur",
    pickupDate: new Date().toISOString().split("T")[0],
    pickupTime: "10:00",
    returnDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    returnTime: "10:00",
    gps: false,
    insurance: false,
    childSeat: false,
    chauffeur: false
  });

  // Country Code Dropdown State
  const [selectedCountry, setSelectedCountry] = useState({ name: "India", code: "+91" });
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  // Distance OSRM States
  const [distance, setDistance] = useState(270);
  const [distanceLoading, setDistanceLoading] = useState(false);
  const [distanceError, setDistanceError] = useState("");
  const [distanceSuccess, setDistanceSuccess] = useState(false);

  const [prices, setPrices] = useState({
    basePrice: 0,
    addOns: 0,
    total: 0
  });

  const [dlError, setDlError] = useState("");

  const filteredCountries = countriesList.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    c.code.includes(countrySearch)
  );

  // DL Verification
  const validateDL = (number, dialCode) => {
    if (formData.chauffeur) return "";
    if (!number) return "Driving License number is required.";

    if (dialCode === "+91") {
      const cleanDL = number.replace(/[- ]/g, "").toUpperCase();
      if (cleanDL.length !== 15) {
        return "Indian DL must be exactly 15 characters (e.g. DL-12-2015-0000123).";
      }

      const dlRegex = /^[A-Z]{2}[0-9]{2}[0-9]{4}[0-9]{7}$/;
      if (!dlRegex.test(cleanDL)) {
        return "Invalid Indian DL structure. Correct format: DL-12-2015-0000123.";
      }

      const issueYear = parseInt(cleanDL.slice(4, 8));
      const currentYear = new Date().getFullYear();
      if (issueYear < 1950 || issueYear > currentYear) {
        return `Invalid Year of Issue: ${issueYear}.`;
      }

      return "";
    }

    if (!/^[a-zA-Z0-9-]{6,20}$/.test(number)) {
      return "Driving License must be between 6 and 20 alphanumeric characters.";
    }

    return "";
  };

  useEffect(() => {
    if (formData.idNumber) {
      const error = validateDL(formData.idNumber, selectedCountry.code);
      setDlError(error);
    } else {
      setDlError("");
    }
  }, [formData.idNumber, selectedCountry, formData.chauffeur]);

  useEffect(() => {
    if (carIdParam) {
      const car = cars.find((c) => c.id === parseInt(carIdParam));
      if (car) setSelectedCar(car);
    }
  }, [carIdParam]);

  // Geocoding and OSRM Road Distance Calculation
  const getCoordinates = async (city) => {
    try {
      const query = city.toLowerCase().includes("india") ? city : `${city}, India`;
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        return {
          lat: parseFloat(data[0].lat),
          lon: parseFloat(data[0].lon),
          displayName: data[0].display_name
        };
      }
      return null;
    } catch (e) {
      console.error("Geocoding failed for:", city, e);
      return null;
    }
  };

  const getRoadDistance = async (fromCoords, toCoords) => {
    try {
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${fromCoords.lon},${fromCoords.lat};${toCoords.lon},${toCoords.lat}?overview=false`
      );
      const data = await response.json();
      if (data.code === "Ok" && data.routes && data.routes.length > 0) {
        return Math.round(data.routes[0].distance / 1000);
      }
      return null;
    } catch (e) {
      console.error("OSRM Route calculation failed:", e);
      return null;
    }
  };

  const handleCalculateRoute = async () => {
    if (!formData.pickupLocation || !formData.dropoffLocation) {
      setDistanceError("Please enter both Pickup and Dropoff locations.");
      setDistanceSuccess(false);
      return;
    }

    setDistanceLoading(true);
    setDistanceError("");
    setDistanceSuccess(false);

    try {
      const fromCoords = await getCoordinates(formData.pickupLocation);
      const toCoords = await getCoordinates(formData.dropoffLocation);

      if (!fromCoords || !toCoords) {
        setDistanceError("Could not geocode one or both cities. Please specify valid city names in India.");
        setDistanceLoading(false);
        return;
      }

      const dist = await getRoadDistance(fromCoords, toCoords);
      if (dist !== null && dist > 0) {
        setDistance(dist);
        setDistanceSuccess(true);
      } else {
        setDistanceError("Could not calculate road route between these cities. Check connection or location names.");
      }
    } catch (err) {
      setDistanceError("Network error occurred during route calculation. Try again.");
    } finally {
      setDistanceLoading(false);
    }
  };

  // Pricing Model: Kilometer-based
  useEffect(() => {
    const base = selectedCar.ratePerKm * distance;
    let addOnCost = 0;
    if (formData.gps) addOnCost += 500;
    if (formData.insurance) addOnCost += 1500;
    if (formData.childSeat) addOnCost += 300;
    if (formData.chauffeur) addOnCost += 2000;

    setPrices({
      basePrice: base,
      addOns: addOnCost,
      total: base + addOnCost
    });
  }, [distance, formData.gps, formData.insurance, formData.childSeat, formData.chauffeur, selectedCar]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.chauffeur) {
      const error = validateDL(formData.idNumber, selectedCountry.code);
      if (error) {
        setDlError(error);
        alert(`Driving License error: ${error}`);
        return;
      }
    }

    const bookingDetails = {
      carName: selectedCar.name,
      carImage: selectedCar.image,
      carRatePerKm: selectedCar.ratePerKm,
      countryName: selectedCountry.name,
      countryDialCode: selectedCountry.code,
      distance,
      ...formData,
      ...prices
    };
    localStorage.setItem("latestBooking", JSON.stringify(bookingDetails));
    navigate("/booking-summary");
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col font-sans overflow-x-hidden">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white py-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 animate-slide-down">
          <span className="text-[#38BDF8] font-bold text-xs uppercase tracking-widest block mb-2 tracking-wider">Checkout Details</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight font-sans">Book Your Travel</h1>
          <p className="text-blue-100 text-xs sm:text-sm mt-2 max-w-lg mx-auto font-light leading-relaxed">
            Kilometer-based transparent pricing model. Real distance calculations powered by OSRM route servers.
          </p>
        </div>
      </section>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-2 mb-10 text-sm font-medium animate-fade-in">
          <span className="text-[#2563EB] flex items-center gap-1.5">
            <span className="w-6 h-6 rounded-full bg-[#2563EB]/15 flex items-center justify-center font-bold text-xs">1</span>
            Enter Details
          </span>
          <FaChevronRight className="text-slate-350 text-xs" />
          <span className="text-slate-400 flex items-center gap-1.5">
            <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs">2</span>
            Confirmation
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Area */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 animate-slide-up delay-200">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
              <span className="bg-[#2563EB]/10 text-[#2563EB] p-2.5 rounded-xl animate-float"><FaCar /></span>
              Booking Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Selected Car Info */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0F172A] block">Selected Vehicle</label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl gap-4 hover:border-[#2563EB]/30 transition-colors duration-300">
                  <div className="flex items-center gap-4">
                    <img
                      src={selectedCar.image}
                      alt={selectedCar.name}
                      className="w-20 h-14 object-cover rounded-lg border border-slate-200 hover:scale-105 transition-transform duration-350"
                    />
                    <div>
                      <h4 className="font-bold text-[#0F172A] text-base">{selectedCar.name}</h4>
                      <span className="text-xs text-[#475569] bg-[#2563EB]/10 text-[#2563EB] px-2.5 py-0.5 rounded-full font-medium uppercase tracking-wider">
                        {selectedCar.type}
                      </span>
                      <span className="text-xs text-[#475569] ml-2 font-semibold">₹{selectedCar.ratePerKm}/km</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigate("/cars")}
                    className="text-xs font-bold text-[#2563EB] hover:text-[#2563EB]/85 border border-[#2563EB]/25 hover:border-[#2563EB] bg-white px-4 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer hover:bg-slate-50"
                  >
                    Change Car
                  </button>
                </div>
              </div>

              {/* Personal Information */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0F172A] block">Full Name</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400"><FaUser /></span>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full pl-10 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0F172A] block">Email Address</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400"><FaEnvelope /></span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full pl-10 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone with Searchable Country Codes */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0F172A] block">Phone Number</label>
                    <div className="relative flex">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                          className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 border-r-0 rounded-l-xl px-3.5 py-3 text-sm text-[#0F172A] hover:bg-slate-100 transition-colors h-full focus:outline-none"
                        >
                          <span className="font-semibold text-[#0F172A]">{selectedCountry.code}</span>
                          <span className="text-[#475569] text-[9px] translate-y-[1px]">▼</span>
                        </button>

                        {showCountryDropdown && (
                          <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-lg z-50 p-2.5 space-y-2 animate-scale-in">
                            <input
                              type="text"
                              placeholder="Search country..."
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                              autoFocus
                            />
                            <div className="max-h-48 overflow-y-auto space-y-0.5 scrollbar-thin">
                              {filteredCountries.length > 0 ? (
                                filteredCountries.map((c) => (
                                  <button
                                    key={c.name}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountry(c);
                                      setShowCountryDropdown(false);
                                      setCountrySearch("");
                                    }}
                                    className="w-full text-left px-3 py-2 text-xs text-[#475569] hover:bg-slate-50 hover:text-[#0F172A] rounded-lg transition-colors flex justify-between"
                                  >
                                    <span>{c.name}</span>
                                    <span className="font-bold text-[#0F172A]">{c.code}</span>
                                  </button>
                                ))
                              ) : (
                                <div className="text-center py-2 text-xs text-slate-400">No results found</div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit number"
                        className="w-full bg-slate-50 border border-slate-200 rounded-r-xl px-4 py-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Driving License Input */}
                  <div className="space-y-2">
                    <label className={`text-sm font-medium block ${formData.chauffeur ? 'text-slate-400' : 'text-[#0F172A]'}`}>
                      Driving License Number {!formData.chauffeur && <span className="text-[#F97316]">*</span>}
                    </label>
                    <div className="relative">
                      <span className={`absolute inset-y-0 left-0 pl-3 flex items-center ${formData.chauffeur ? 'text-slate-300' : 'text-slate-400'}`}>
                        <FaIdCard />
                      </span>
                      <input
                        type="text"
                        name="idNumber"
                        value={formData.chauffeur ? "" : formData.idNumber}
                        onChange={handleInputChange}
                        disabled={formData.chauffeur}
                        placeholder={formData.chauffeur ? "Not required (Chauffeur active)" : "e.g. DL-12-2015-0000123"}
                        className={`w-full pl-10 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-200 ${
                          formData.chauffeur
                            ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                            : dlError
                            ? "bg-rose-50/50 border-rose-300 focus:border-rose-500 focus:ring-rose-500 text-rose-900"
                            : "bg-slate-50 border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB] text-[#0F172A] focus:bg-white"
                        }`}
                        required={!formData.chauffeur}
                      />
                    </div>
                    {!formData.chauffeur && dlError && (
                      <p className="text-xs text-rose-600 font-medium mt-1 animate-fadeIn">{dlError}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Schedule and Trip Routing (From/To) */}
              <div className="border-t border-slate-100 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-[#0F172A]">Trip Routing & Schedule</h3>
                  <button
                    type="button"
                    onClick={handleCalculateRoute}
                    className="text-xs font-bold text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/15 hover:bg-[#2563EB] hover:text-white px-3.5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 btn-hover-effect"
                  >
                    {distanceLoading ? <FaSpinner className="animate-spin" /> : <FaRoad />} Calculate Distance
                  </button>
                </div>

                {/* Distance Warnings/Status Feedback */}
                {distanceError && (
                  <div className="mb-4 p-3 bg-rose-50 border border-rose-100 text-rose-700 text-xs font-semibold rounded-xl animate-scale-in">
                    {distanceError}
                  </div>
                )}
                {distanceSuccess && (
                  <div className="mb-4 p-3 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold rounded-xl animate-scale-in">
                    Real route calculated: <span className="underline">{distance} kilometers</span> road distance between cities.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {/* From Location */}
                  <div className="space-y-2 md:col-span-1">
                    <label className="text-sm font-medium text-[#0F172A] block">From (Pickup)</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400"><FaMapMarkerAlt /></span>
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleInputChange}
                        placeholder="e.g. Delhi"
                        className="w-full pl-10 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* To Location */}
                  <div className="space-y-2 md:col-span-1">
                    <label className="text-sm font-medium text-[#0F172A] block">To (Destination)</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400"><FaMapMarkerAlt /></span>
                      <input
                        type="text"
                        name="dropoffLocation"
                        value={formData.dropoffLocation}
                        onChange={handleInputChange}
                        placeholder="e.g. Jaipur"
                        className="w-full pl-10 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Pickup date */}
                  <div className="space-y-2 md:col-span-1">
                    <label className="text-sm font-medium text-[#0F172A] block">Pickup Date</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400"><FaCalendarAlt /></span>
                      <input
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full pl-10 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  {/* Pickup Time */}
                  <div className="space-y-2 md:col-span-1">
                    <label className="text-sm font-medium text-[#0F172A] block">Pickup Time</label>
                    <input
                      type="time"
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white transition-all duration-200"
                      required
                    />
                  </div>

                  {/* Return date */}
                  <div className="space-y-2 md:col-span-1">
                    <label className="text-sm font-medium text-[#0F172A] block">Return Date</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400"><FaCalendarAlt /></span>
                      <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleInputChange}
                        min={formData.pickupDate}
                        className="w-full pl-10 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[#0F172A] text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:bg-white transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional Add-ons */}
              <div className="border-t border-slate-100 pt-6">
                <h3 className="text-lg font-bold text-[#0F172A] mb-4">Add-ons (Optional)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Chauffeur Service */}
                  <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-all duration-200 hover:border-[#2563EB]/35 hover:-translate-y-0.5">
                    <input
                      type="checkbox"
                      name="chauffeur"
                      checked={formData.chauffeur}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] border-slate-300"
                    />
                    <div>
                      <span className="text-sm font-semibold text-[#0F172A] block">Chauffeur Driven</span>
                      <span className="text-xs text-[#475569]">₹2000 flat (Bypasses DL requirement)</span>
                    </div>
                  </label>

                  {/* GPS */}
                  <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-all duration-200 hover:border-[#2563EB]/35 hover:-translate-y-0.5">
                    <input
                      type="checkbox"
                      name="gps"
                      checked={formData.gps}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] border-slate-300"
                    />
                    <div>
                      <span className="text-sm font-semibold text-[#0F172A] block">GPS Navigation</span>
                      <span className="text-xs text-[#475569]">₹500 flat</span>
                    </div>
                  </label>

                  {/* Insurance */}
                  <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-all duration-200 hover:border-[#2563EB]/35 hover:-translate-y-0.5">
                    <input
                      type="checkbox"
                      name="insurance"
                      checked={formData.insurance}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] border-slate-300"
                    />
                    <div>
                      <span className="text-sm font-semibold text-[#0F172A] block">Full Protection</span>
                      <span className="text-xs text-[#475569]">₹1500 flat</span>
                    </div>
                  </label>

                  {/* Child Seat */}
                  <label className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-all duration-200 hover:border-[#2563EB]/35 hover:-translate-y-0.5">
                    <input
                      type="checkbox"
                      name="childSeat"
                      checked={formData.childSeat}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] border-slate-300"
                    />
                    <div>
                      <span className="text-sm font-semibold text-[#0F172A] block">Child Seat</span>
                      <span className="text-xs text-[#475569]">₹300 flat</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-250 cursor-pointer btn-hover-effect"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>

          {/* Pricing Details Panel */}
          <div className="space-y-6 animate-slide-up delay-300">
            {/* Selected Car Details */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover-effect">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-full h-44 object-cover hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="p-6">
                <span className="bg-[#F97316]/10 text-[#F97316] text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {selectedCar.type}
                </span>
                <h3 className="text-xl font-bold text-[#0F172A] mt-2">{selectedCar.name}</h3>
                <p className="text-[#475569] text-xs mt-1 leading-relaxed">{selectedCar.description}</p>
              </div>
            </div>

            {/* Calculations Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover-effect">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                <h3 className="text-lg font-bold text-[#0F172A]">Rental Summary</h3>
                <span className="text-xs font-bold text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-1 rounded-full animate-pulse-glow">
                  Distance-based
                </span>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-[#475569]">
                  <span>Total Distance</span>
                  <span className="font-semibold text-[#0F172A]">{distance} km</span>
                </div>

                <div className="flex justify-between text-[#475569]">
                  <span>Rate per km ({selectedCar.name})</span>
                  <span className="font-semibold text-[#0F172A]">₹{selectedCar.ratePerKm}/km</span>
                </div>

                <div className="flex justify-between text-[#475569] border-b border-slate-100 pb-2.5">
                  <span>Distance Fare</span>
                  <span className="font-bold text-[#0F172A]">₹{selectedCar.ratePerKm * distance}</span>
                </div>

                {formData.chauffeur && (
                  <div className="flex justify-between text-[#475569] animate-fade-in">
                    <span>Chauffeur Service (Flat)</span>
                    <span className="font-semibold text-[#0F172A]">₹2000</span>
                  </div>
                )}

                {formData.gps && (
                  <div className="flex justify-between text-[#475569] animate-fade-in">
                    <span>GPS Navigation (Flat)</span>
                    <span className="font-semibold text-[#0F172A]">₹500</span>
                  </div>
                )}
                
                {formData.insurance && (
                  <div className="flex justify-between text-[#475569] animate-fade-in">
                    <span>Full Protection (Flat)</span>
                    <span className="font-semibold text-[#0F172A]">₹1500</span>
                  </div>
                )}

                {formData.childSeat && (
                  <div className="flex justify-between text-[#475569] animate-fade-in">
                    <span>Child Seat Option (Flat)</span>
                    <span className="font-semibold text-[#0F172A]">₹300</span>
                  </div>
                )}

                <div className="border-t border-slate-100 pt-4 flex justify-between text-base font-bold text-[#0F172A]">
                  <span>Total Fare</span>
                  <span className="text-[#2563EB] text-lg">₹{prices.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
