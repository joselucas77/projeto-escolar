import React from "react";
import { IoCreate } from "react-icons/io5";

function BtnEditItem() {
  return (
    <>
      <button className="border-none outline-none text-3xl absolute top-12 -right-4 -translate-y-2/4 w-10 h-10 bg-gray-200 text-white dark:bg-gray-800 dark:text-gray-700 rounded-full flex items-center justify-center">
        <IoCreate />
      </button>
    </>
  );
}

export default BtnEditItem;
