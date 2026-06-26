import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 py-20">
        <section className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-black text-slate-950 sm:text-5xl">
            Need help with a booking?
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Reach our support team at support@driveindia.example or call
            +91 90000 00000.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
