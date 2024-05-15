"use client";
import { useState } from "react";
import { IoChevronDownOutline, IoChevronUp } from "react-icons/io5";

const SharedFiles = () => {
  const [open, setOpen] = useState(false);
  const OpenDrop = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium text-sm">Arquivos compartilhados</span>
      <div
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full inline-flex self-center text-sm p-2 cursor-pointer text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        onClick={OpenDrop}
      >
        {open ? (
          <IoChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        ) : (
          <IoChevronDownOutline className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        )}
      </div>
    </div>
  );
};

export default SharedFiles;
