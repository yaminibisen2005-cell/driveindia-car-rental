import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Cars from "../pages/Cars/Cars";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Booking from "../pages/Booking/Booking";
import BookingSummary from "../pages/BookingSummary/BookingSummary";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;