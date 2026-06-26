import { Fuel, Gauge, MapPin, Star, Users } from "lucide-react";

function SpecItem({ icon: Icon, label, value }) {
  return (
    <div className="flex min-h-[76px] flex-col items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-2 py-3 text-center">
      <Icon size={18} className="mb-2 text-sky-500" />
      <span className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
        {label}
      </span>
      <span className="mt-0.5 max-w-full break-words text-xs font-semibold text-slate-700">
        {value}
      </span>
    </div>
  );
}

function CarCard({ car }) {
  const specs = [
    { icon: Fuel, label: "Fuel", value: car.fuel },
    { icon: Users, label: "Seats", value: car.seats },
    { icon: Gauge, label: "Gear", value: car.transmission },
  ];

  return (
    <article className="group flex h-full w-full max-w-sm flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
      <div className="relative h-44 w-full overflow-hidden bg-slate-100 sm:h-48">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 bg-gradient-to-b from-black/55 to-transparent p-4">
          <span className="rounded-md bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-900 shadow-sm">
            {car.tag}
          </span>

        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-medium text-slate-500">{car.type}</p>
            <h3 className="mt-1 break-words text-xl font-bold leading-tight text-slate-950">
              {car.name}
            </h3>
          </div>

          <div className="shrink-0 sm:text-right">
            <p className="text-2xl font-black leading-none text-slate-950">
              &#8377;{car.price}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-500">per day</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <div className="flex items-center gap-1.5 font-semibold text-slate-800">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            {car.rating}
            <span className="font-normal text-slate-500">
              ({car.reviews} reviews)
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <MapPin size={15} />
            {car.city}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {specs.map((spec) => (
            <SpecItem
              key={spec.label}
              icon={spec.icon}
              label={spec.label}
              value={spec.value}
            />
          ))}
        </div>

      </div>
    </article>
  );
}

export default CarCard;
