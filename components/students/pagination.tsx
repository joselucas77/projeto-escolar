import { useAppContext } from "@/contexts/context";
import React, { useEffect } from "react";

const Pagination = () => {
  const {
    currentPagePersons,
    setCanGoBack,
    setCanGoForward,
    totalPersonsPages,
    handlePersonsPageChange,
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
            className="flex items-center justify-center cursor-pointer px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePersonsPageChange(currentPagePersons - 1)}
          >
            Anterior
          </div>
        </li>
        <li>
          <div
            className="flex items-center justify-center cursor-pointer px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePersonsPageChange(currentPagePersons + 1)}
          >
            Próximo
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
