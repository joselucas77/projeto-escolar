import React from "react";

const AddNewChat = () => {
  return (
    <div className="addUser w-max h-max absolute top-0 left-0 right-0 bottom-0 m-auto p-8 z-50 bg-white rounded-2xl shadow-2xl dark:bg-gray-700">
      <form className="flex gap-5">
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="website-admin"
            className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Bonnie Green"
          />
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Pesquisar
        </button>
      </form>
      <div className="user mt-12 flex  items-center justify-between">
        <div className="detail flex items-center gap-20">
          <div className="flex items-center gap-5">
            <div className="relative inline-flex items-center justify-center w-14 h-14 ring-2 p-2 ring-gray-200 overflow-hidden bg-gray-300 rounded-full dark:ring-gray-600 dark:bg-gray-900 cursor-pointer">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                AS
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-base font-bold">Ana Silva</span>
            </div>
          </div>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Adicionar Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewChat;
