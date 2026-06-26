import { Star } from "lucide-react";

function TestimonialCard({ testimonial }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      
      <div className="mb-4 flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <p className="mb-6 text-slate-600 leading-7">
        "{testimonial.review}"
      </p>

      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-slate-900">
            {testimonial.name}
          </h4>

          <p className="text-sm text-slate-500">
            {testimonial.location}
          </p>
        </div>
      </div>

    </div>
  );
}

export default TestimonialCard;