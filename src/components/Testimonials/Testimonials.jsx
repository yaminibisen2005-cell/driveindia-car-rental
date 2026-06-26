import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Mumbai",
    review:
      "Amazing experience! The booking process was smooth and the car was in excellent condition. Highly recommended.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    id: 2,
    name: "Priya Verma",
    location: "Pune",
    review:
      "DriveIndia made our family trip hassle-free. Affordable pricing and excellent customer support.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },

  {
    id: 3,
    name: "Amit Patel",
    location: "Bangalore",
    review:
      "Loved the premium car options. The entire rental process was quick and transparent.",
    image:
      "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-14 text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-sky-500">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Thousands of travelers across India trust DriveIndia
            for comfortable and reliable car rentals.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;