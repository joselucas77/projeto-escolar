import React, { useEffect, useState } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [canGoBack, setCanGoBack] = useState(true);
  const [canGoForward, setCanGoForward] = useState(true);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    setCanGoBack(currentPage > 1);
    setCanGoForward(currentPage < totalPages);
  }, [currentPage, totalPages]);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="relative flex w-20 -top-8 left-[calc(100%-47%)]">
      <IoArrowBackCircleOutline
        onClick={() => handlePageClick(currentPage - 1)}
        className={`text-4xl ${
          canGoBack
            ? "text-white dark:text-gray-950 cursor-pointer"
            : "text-gray-400 dark:text-gray-900 cursor-default"
        }`}
      />
      <IoArrowForwardCircleOutline
        onClick={() => handlePageClick(currentPage + 1)}
        className={`text-4xl ${
          canGoForward
            ? "text-white dark:text-gray-950 cursor-pointer "
            : "text-gray-400 dark:text-gray-900 cursor-default"
        }`}
      />
    </div>
  );
};

export default Pagination;
