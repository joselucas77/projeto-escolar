import React from "react";

interface Items {
  id: string;
  label: string;
  isActive: any;
  onClick: () => void;
}

const Tab = ({ id, label, isActive, onClick }: Items) => {
  return (
    <li className="w-full rounded-ss-l">
      <button
        id={`${id}-tab`}
        data-tabs-target={`#${id}`}
        type="button"
        role="tab"
        aria-controls={id}
        aria-selected={isActive}
        onClick={onClick}
        className={`inline-block w-full p-4 ${
          id == "stats" ? "rounded-ss-lg" : ""
        } ${
          id == "faq" ? "rounded-se-lg" : ""
        }  bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 ${
          isActive ? "text-blue-500" : ""
        }`}
      >
        {label}
      </button>
    </li>
  );
};

export default Tab;
