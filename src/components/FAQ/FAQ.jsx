import { useState } from "react";
import FAQItem from "./FAQItems";

const faqData = [
  {
    id: 1,
    question: "What documents are required to rent a car?",
    answer:
      "You need a valid driving license, Aadhaar Card or any government-issued ID proof for verification.",
  },

  {
    id: 2,
    question: "Can I rent a car for outstation travel?",
    answer:
      "Yes, DriveIndia allows both city rides and outstation trips across India.",
  },

  {
    id: 3,
    question: "Is fuel included in the rental price?",
    answer:
      "No, fuel charges are generally borne by the customer unless specified in a special package.",
  },

  {
    id: 4,
    question: "Can I cancel my booking?",
    answer:
      "Yes, bookings can be cancelled according to our cancellation policy before the pickup time.",
  },

  {
    id: 5,
    question: "Do you provide chauffeur-driven cars?",
    answer:
      "Yes, customers can choose self-drive or chauffeur-driven vehicles while booking.",
  },
];

function FAQ() {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-sky-500">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Find answers to the most common questions about
            renting a car with DriveIndia.
          </p>

        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
