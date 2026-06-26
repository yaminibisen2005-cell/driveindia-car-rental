import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import BookingForm from "../../components/BookingForm/BookingForm";
import FeaturedCars from "../../components/FeaturedCars/FeaturedCars";
import Services from "../../components/Services/Services";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingForm />
      <FeaturedCars />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;