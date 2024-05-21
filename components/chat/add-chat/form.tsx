"use client";
import { useAppContext } from "@/contexts/context";
import { IoRemove } from "react-icons/io5";
import { PiUserCirclePlus } from "react-icons/pi";

const AddNewChat = () => {
  const { searchProfile, setSearchProfile, newChat, addChat, setAddMode } =
    useAppContext();
  return (
    <div className="w-max h-max absolute top-0 left-0 right-0 bottom-0 m-auto p-8 z-50 bg-white rounded-2xl shadow-2xl dark:bg-gray-700">
      <form className="flex justify-between gap-5 py-4">
        <div className="flex w-3/4">
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
            value={searchProfile}
            onChange={(e) => setSearchProfile(e.target.value)}
          />
        </div>
        <div
          className="flex justify-center items-center text-2xl text-gray-500 bg-gray-200 w-10 h-10 rounded-full cursor-pointer shadow-inner border-2 border-solid border-gray-50 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-700"
          onClick={() => setAddMode((prev) => !prev)}
        >
          <IoRemove />
        </div>
      </form>
      {searchProfile && (
        <div className="flow-root pr-2 max-h-60 overflow-scroll shadow-inner rounded-lg">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {newChat.map((chat, index) => (
              <li
                key={index}
                className="py-3 px-1 sm:py-4 cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                onClick={() => addChat(index)}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden ring-2 p-1 ring-gray-200 bg-gray-300 rounded-full dark:ring-gray-700 dark:bg-gray-900 cursor-default">
                      <span className="font-medium text-lg text-gray-800 dark:text-gray-300">
                        {chat.profile}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {chat.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {chat.email}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <PiUserCirclePlus />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AddNewChat;
