import { useAppContext } from "@/contexts/context";
import React, { useEffect } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const Pagination = () => {
  const {
    currentPageItems,
    canGoBack,
    setCanGoBack,
    canGoForward,
    setCanGoForward,
    totalItemsPages,
    handleItemsPageChange,
  } = useAppContext();

  useEffect(() => {
    setCanGoBack(currentPageItems > 1);
    setCanGoForward(currentPageItems < totalItemsPages);
  }, [currentPageItems, totalItemsPages, setCanGoBack, setCanGoForward]);

  const handleBackClick = () => {
    if (!canGoBack) return;
    handleItemsPageChange(currentPageItems - 1);
  };

  const handleForwardClick = () => {
    if (!canGoForward) return;
    handleItemsPageChange(currentPageItems + 1);
  };

  return (
    <div className="relative flex w-20 -top-8 left-[calc(100%-47%)]">
      <IoArrowBackCircleOutline
        onClick={handleBackClick}
        className={`text-4xl rounded-full shadow-gray-300 shadow dark:shadow dark:shadow-gray-900 ${
          canGoBack
            ? "text-gray-400 dark:text-gray-950 cursor-pointer"
            : "text-gray-300 dark:text-gray-900 cursor-default"
        }`}
      />
      <IoArrowForwardCircleOutline
        onClick={handleForwardClick}
        className={`text-4xl rounded-full shadow-gray-300 shadow dark:shadow dark:shadow-gray-900 ${
          canGoForward
            ? "text-gray-400 dark:text-gray-950 cursor-pointer "
            : "text-gray-300 dark:text-gray-900 cursor-default"
        }`}
      />
    </div>
  );
};

export default Pagination;
