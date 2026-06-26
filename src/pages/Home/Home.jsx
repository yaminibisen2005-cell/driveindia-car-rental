import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import BookingForm from "../../components/BookingForm/BookingForm";
import PopularCars from "../../components/FeaturedCars/PopularCars";
import Services from "../../components/Services/Services";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import PopularDestinations from "../../components/PopularDestinations/PopularDestinations";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingForm />
      <PopularCars />
      <PopularDestinations />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
