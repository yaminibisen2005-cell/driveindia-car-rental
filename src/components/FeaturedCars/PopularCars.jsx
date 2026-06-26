import { ArrowRight } from "lucide-react";
import { popularCars } from "../../data/popularCars";
import CarCard from "./CarCard";

function PopularCars() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
              Our Fleet
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Featured Cars
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Pick from city-friendly hatchbacks, family SUVs, and premium rides
              with clear daily pricing.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-sky-200 bg-white px-4 py-3 text-sm font-bold text-sky-600 shadow-sm transition hover:border-sky-300 hover:bg-sky-50"
          >
            View All Cars
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {popularCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCars;
