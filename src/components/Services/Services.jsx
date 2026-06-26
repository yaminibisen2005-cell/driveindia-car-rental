import { Car, Headphones, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Self-drive rentals",
    text: "Flexible daily plans for city and outstation travel.",
  },
  {
    icon: ShieldCheck,
    title: "Verified vehicles",
    text: "Every car is checked before handover for a cleaner trip.",
  },
  {
    icon: Headphones,
    title: "Travel support",
    text: "Get booking help and trip assistance when you need it.",
  },
];

function Services() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-500">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
            Rentals built around real trips
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <service.icon size={28} className="text-sky-500" />
              <h3 className="mt-5 text-xl font-bold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
