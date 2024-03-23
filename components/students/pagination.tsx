import { useAppContext } from "@/contexts/context";
import React, { useEffect } from "react";

const Pagination = () => {
  const {
    currentPagePersons,
    canGoBack,
    canGoForward,
    setCanGoBack,
    setCanGoForward,
    totalPersonsPages,
    handleBackClickTable,
    handleForwardClickTable,
  } = useAppContext();

  useEffect(() => {
    setCanGoBack(currentPagePersons > 1);
    setCanGoForward(currentPagePersons < totalPersonsPages);
  }, [currentPagePersons, totalPersonsPages, setCanGoBack, setCanGoForward]);

  return (
    <nav
      className="flex items-center flex-column flex-wrap md:flex-row justify-between px-4 py-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        Página{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {currentPagePersons}
        </span>{" "}
        de{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {totalPersonsPages}
        </span>
      </span>
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li>
          <div
            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-white border border-gray-300 rounded-s-lg  dark:bg-gray-800 dark:border-gray-700 ${
              canGoBack
                ? "text-gray-500 hover:text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer"
                : "text-gray-300 dark:text-gray-600 cursor-default"
            }`}
            onClick={handleBackClickTable}
          >
            Anterior
          </div>
        </li>
        <li>
          <div
            className={`flex items-center justify-center px-3 h-8 leading-tight bg-white border border-gray-300 rounded-e-lg dark:bg-gray-800 dark:border-gray-700 ${
              canGoForward
                ? "text-gray-500 hover:text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer"
                : "text-gray-300 dark:text-gray-600 cursor-default"
            }`}
            onClick={handleForwardClickTable}
          >
            Próximo
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
