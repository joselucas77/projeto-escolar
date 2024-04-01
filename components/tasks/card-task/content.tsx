"use client";
import React from "react";
import { useAppContext } from "@/contexts/context";

interface Context {
  title: string;
  description: string;
  date: string;
}

const Content = ({ title, description, date }: Context) => {
  const { formatDate } = useAppContext();
  return (
    <div>
      <h1 className="text-lg font-semibold">{title}</h1>
      <p className="pt-6 text-gray-800 dark:text-gray-200 max-h-24">
        {description}
      </p>
      <p className="pt-4">
        <span className="text-gray-600 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:text-gray-400 border border-gray-500 ">
          <svg
            className="w-2.5 h-2.5 me-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
          {formatDate(date)}
        </span>
      </p>
    </div>
  );
};

export default Content;
