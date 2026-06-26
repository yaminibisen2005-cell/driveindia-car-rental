import { ChevronDown, ChevronUp } from "lucide-react";

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <h3 className="text-lg font-semibold text-slate-900">
          {faq.question}
        </h3>

        {isOpen ? (
          <ChevronUp className="text-sky-500" />
        ) : (
          <ChevronDown className="text-slate-500" />
        )}
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="leading-7 text-slate-600">
            {faq.answer}
          </p>
        </div>
      )}

    </div>
  );
}

export default FAQItem;
