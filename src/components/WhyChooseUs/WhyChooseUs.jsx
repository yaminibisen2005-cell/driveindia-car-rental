import { Clock, IndianRupee, Sparkles } from "lucide-react";

const reasons = [
  { icon: IndianRupee, label: "Transparent pricing" },
  { icon: Clock, label: "Quick pickup" },
  { icon: Sparkles, label: "Clean cars" },
];

function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-300">
            Why DriveIndia
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Simple rentals without the usual friction
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.label}
              className="rounded-lg border border-white/10 bg-white/5 p-5"
            >
              <reason.icon size={26} className="text-sky-300" />
              <p className="mt-4 font-bold">{reason.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
