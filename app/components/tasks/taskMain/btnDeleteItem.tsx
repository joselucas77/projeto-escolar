import React from "react";
import { IoTrash } from "react-icons/io5";
import { useAppContext } from "../../../api/utils/context";

function BtnDeleteItem() {
  const { openPopUpModal } = useAppContext();
  return (
    <>
      <button
        className="border-none outline-none text-3xl absolute top-24 -right-4 -translate-y-2/4 w-10 h-10 bg-gradient-to-t from-gray-300 to-gray-400 hover:bg-gradient-to-b hover:from-gray-300 hover:to-gray-400 text-white dark:from-gray-600 dark:to-gray-700 dark:hover:from-gray-600 dark:hover:to-gray-700 rounded-full flex items-center justify-center"
        onClick={openPopUpModal}
      >
        <IoTrash />
      </button>
    </>
  );
}

export default BtnDeleteItem;
