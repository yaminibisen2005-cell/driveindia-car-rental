import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CarCard from "../../components/FeaturedCars/CarCard";
import { cars } from "../../data/cars";

function Cars() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50">
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
              Browse Fleet
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Cars available for rent
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Choose a clean, verified car for city drives, outstation trips,
              family travel, or weekend adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Cars;
