import { Car } from "lucide-react";

const destinations = [
  {
    id: 1,
    city: "Mumbai",
    subtitle: "City of Dreams",
    cars: 48,
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&h=800&fit=crop",
    large: true,
  },

  {
    id: 2,
    city: "New Delhi",
    subtitle: "India's Capital",
    cars: 62,
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=800&fit=crop",
  },

  {
    id: 3,
    city: "Goa",
    subtitle: "Sun, Sand and Sea",
    cars: 35,
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=800&fit=crop",
  },

  {
    id: 4,
    city: "Jaipur",
    subtitle: "The Pink City",
    cars: 28,
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&h=800&fit=crop",
  },

  {
    id: 5,
    city: "Kerala",
    subtitle: "God's Own Country",
    cars: 31,
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&h=800&fit=crop",
  },
];

function PopularDestinations() {
  return (
    <section className="bg-[#021336] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-sky-400">
            Explore India
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
            Popular Destinations
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">

          {/* Mumbai */}
          <div className="lg:col-span-8">
            <DestinationCard destination={destinations[0]} height="h-[310px]" />
          </div>

          {/* Delhi */}
          <div className="lg:col-span-4">
            <DestinationCard destination={destinations[1]} height="h-[310px]" />
          </div>

          {/* Goa */}
          <div className="lg:col-span-4">
            <DestinationCard destination={destinations[2]} height="h-[240px]" />
          </div>

          {/* Jaipur */}
          <div className="lg:col-span-4">
            <DestinationCard destination={destinations[3]} height="h-[240px]" />
          </div>

          {/* Kerala */}
          <div className="lg:col-span-4">
            <DestinationCard destination={destinations[4]} height="h-[240px]" />
          </div>

        </div>

      </div>
    </section>
  );
}

function DestinationCard({ destination, height }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl ${height}`}
    >
      <img
        src={destination.image}
        alt={destination.city}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-4xl font-bold text-white">
          {destination.city}
        </h3>

        <p className="mt-1 text-lg text-white/80">
          {destination.subtitle}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sky-400">
          <Car size={16} />
          <span className="font-semibold">
            {destination.cars} cars available
          </span>
        </div>
      </div>
    </div>
  );
}

export default PopularDestinations;