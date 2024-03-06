import React from "react";
import { useAppContext } from "../../../utils/context";

function NewTaskButton() {
  const { openModal } = useAppContext();
  return (
    <div className="relative w-36 -top-8 left-[calc(100%-48%)]">
      <button
        type="button"
        className="text-gray-900 bg-white hover:bg-gray-300 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        onClick={openModal}
      >
        Nova Tarefa
      </button>
    </div>
  );
}

export default NewTaskButton;
