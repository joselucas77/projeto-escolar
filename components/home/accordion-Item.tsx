"use client";
import React, { useState } from "react";

interface Items {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: Items) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="accordion-flush" data-accordion="collapse">
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full py-5 font-medium text-left  border-b border-gray-200 ${
            isOpen
              ? "text-gray-900 dark:text-gray-50"
              : "text-gray-500 dark:text-gray-400"
          } dark:border-gray-700`}
          onClick={toggleAccordion}
        >
          <span>{question}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-${isOpen ? "0" : "180"} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {isOpen && (
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
