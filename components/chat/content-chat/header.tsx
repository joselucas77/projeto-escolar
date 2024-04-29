import React from "react";
import { IoInformationCircleOutline, IoSearchOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <div className="flex items-center justify-between pb-2 px-2 border-b border-solid border-gray-300 dark:border-gray-900">
      <div className="flex items-center gap-5">
        <div className="relative inline-flex items-center justify-center w-12 h-12 ring-2 p-1 ring-gray-200 overflow-hidden bg-gray-300 rounded-full dark:ring-gray-700 dark:bg-gray-900 cursor-pointer">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            AS
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold">Ana Silva</span>
        </div>
      </div>
      <div className="flex gap-5">
        <IoSearchOutline className="w-6 h-6 cursor-pointer" />
        <IoInformationCircleOutline className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};
