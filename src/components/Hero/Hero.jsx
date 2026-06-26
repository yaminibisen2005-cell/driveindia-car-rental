export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020B1D] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.1),_transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.04),_transparent_35%)]" />

      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
        alt="Luxury car background"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
        <div className="grid gap-10 py-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-3 text-sm text-gray-200 shadow-sm backdrop-blur-sm">
              <span className="rounded-full bg-sky-400 px-2 py-0.5 text-xs font-bold text-slate-950">
                Fast
              </span>
              Trusted by 50,000+ travelers across India
            </div>

            <div className="space-y-3">
              <h2 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Drive India
              </h2>
              <h3 className="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-300 bg-clip-text text-5xl font-black leading-tight tracking-tight text-transparent sm:text-6xl lg:text-7xl">
                Your Way
              </h3>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
              Rent premium cars for self-drive trips, outstation adventures, and
              city exploration.
              <span className="mt-3 block font-semibold text-sky-400">
                100+ cities. 500+ cars. Zero hidden charges.
              </span>
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -right-20 top-12 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
