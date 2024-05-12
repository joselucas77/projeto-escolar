import React from "react";
import AccordionItem from "./accordion-Item";
import { tabData } from "@/api/datas/home";

interface Items {
  activeTab: string;
}

const TabContent = ({ activeTab }: Items) => {
  return (
    <div
      className={`${
        activeTab == "faq"
          ? "p-4 bg-white rounded-lg dark:bg-gray-800"
          : "p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
      }`}
      role="tabpanel"
    >
      {activeTab === "stats" && (
        <dl className="grid max-w-screen-xl grid-cols-3 gap-8 p-4 mx-auto text-gray-900 dark:text-white sm:p-8">
          {tabData.stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <dt className="mb-2 text-3xl font-extrabold">{item.value}</dt>
              <dd className="text-gray-500 dark:text-gray-400">{item.label}</dd>
            </div>
          ))}
        </dl>
      )}
      {activeTab === "about" && (
        <>
          <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {tabData.about.title}
          </h2>
          <ul
            role="list"
            className="space-y-4 text-gray-500 dark:text-gray-400"
          >
            {tabData.about.services.map((service, index) => (
              <li
                key={index}
                className="flex space-x-2 rtl:space-x-reverse items-center"
              >
                <svg
                  className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="leading-tight">{service}</span>
              </li>
            ))}
          </ul>
        </>
      )}
      {activeTab === "faq" && (
        <div id="accordion-flush" data-accordion="collapse">
          {tabData.faq.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TabContent;
