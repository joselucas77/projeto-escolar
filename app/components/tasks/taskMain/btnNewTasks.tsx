import React from "react";
import { useAppContext } from "../../../api/utils/context";

function NewTaskButton() {
  const { openFormModal } = useAppContext();
  return (
    <div className="relative w-36 -top-8 left-[calc(100%-48%)]">
      <button
        className="text-gray-900 shadow-gray-300 shadow bg-gradient-to-r from-gray-300 to-gray-400 hover:bg-gradient-to-l hover:from-gray-300 hover:to-gray-400 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:text-white dark:bg-gradient-to-r dark:shadow dark:shadow-gray-900 dark:from-gray-600 dark:to-gray-700 dark:hover:bg-gradient-to-l dark:hover:from-gray-600 dark:hover:to-gray-700  dark:focus:ring-gray-800"
        onClick={openFormModal}
      >
        Nova Tarefa
      </button>
    </div>
  );
}

export default NewTaskButton;
