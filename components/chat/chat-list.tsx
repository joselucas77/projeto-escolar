import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { useAppContext } from "@/contexts/context";

const ChatList = () => {
  const { navbarActive, search, setSearch, chat } = useAppContext();
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="flex flex-col overflow-scroll">
      <div className="flex flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between py-4 px-1 mt-2">
        <div
          className={`transition-all duration-500 ${
            navbarActive ? "w-48" : "w-60"
          }`}
        >
          <div className="relative">
            <div
              className="absolute inset-y-0
             start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Pesquise"
            />
          </div>
        </div>
        <div
          className="flex justify-center items-center text-2xl text-gray-500 bg-gray-50 w-8 h-8 rounded-xl cursor-pointer dark:text-gray-400 dark:bg-gray-700"
          onClick={() => setAddMode((prev) => !prev)}
        >
          {addMode ? <IoRemove /> : <IoAdd />}
        </div>
      </div>
      {chat.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-5 p-5 cursor-pointer border-b border-solid border-gray-300 dark:border-gray-900"
        >
          <div className="relative inline-flex items-center justify-center w-12 h-12 ring-2 p-1 ring-gray-100 overflow-hidden bg-gray-200 rounded-full dark:ring-gray-500 dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {item.profile}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-medium">{item.name}</span>
            <p className="text-sm font-light">{item.mensage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
