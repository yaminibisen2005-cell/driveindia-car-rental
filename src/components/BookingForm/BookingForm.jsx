import { Calendar, MapPin, Search } from "lucide-react";

function BookingForm() {
  return (
    <section className="bg-white py-8">
      <form className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-6 md:grid-cols-4 lg:px-8">
        <label className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4">
          <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <MapPin size={16} className="text-sky-500" />
            Pickup city
          </span>
          <input className="outline-none" placeholder="Delhi" type="text" />
        </label>

        <label className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4">
          <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Calendar size={16} className="text-sky-500" />
            Pickup date
          </span>
          <input className="outline-none" type="date" />
        </label>

        <label className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4">
          <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
            <Calendar size={16} className="text-sky-500" />
            Return date
          </span>
          <input className="outline-none" type="date" />
        </label>

        <button
          type="button"
          className="inline-flex min-h-20 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
        >
          <Search size={18} />
          Search cars
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
