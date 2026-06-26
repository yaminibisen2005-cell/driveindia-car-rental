import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <Navbar />
      <main className="bg-white py-20">
        <section className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
            About
          </p>
          <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">
            DriveIndia makes rentals simple
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We help travelers book reliable self-drive cars across Indian
            cities with clear pricing, verified vehicles, and helpful support.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
