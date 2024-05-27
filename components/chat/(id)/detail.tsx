"use client";
import { IoArrowUndo } from "react-icons/io5";
import { useAppContext } from "@/contexts/context";
import SharedPhotos from "./options-details/shared-photos";
import GeneralInformation from "./options-details/general-information";
import SharedFiles from "./options-details/shared-files";

const Detail = () => {
  const { detailsActive, toggleChatDetails } = useAppContext();
  return (
    <div className={`${detailsActive ? "basis-1/4" : "hidden"}`}>
      <div
        className="absolute left-3 top-5 cursor-pointer border-2 border-gray-300 dark:border-gray-950 rounded-full p-2"
        onClick={toggleChatDetails}
      >
        <IoArrowUndo />
      </div>
      <div className="flex justify-center items-center flex-col gap-2 pb-2 border-b border-gray-300 dark:border-gray-900">
        <div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden ring-2 p-1 ring-gray-200 bg-gray-300 rounded-full dark:ring-gray-700 dark:bg-gray-900 cursor-default">
          <span className="font-medium text-xl text-gray-800 dark:text-gray-300">
            JL
          </span>
        </div>
        <h2>Ana Silva</h2>
      </div>
      <div className="flex flex-col p-5 gap-5">
        <GeneralInformation />
        <SharedPhotos />
        <SharedFiles />
        <div className="flex bottom-4">
          <button
            type="button"
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Excluir conversa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
