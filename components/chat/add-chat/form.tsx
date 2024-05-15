"use client";
import { useAppContext } from "@/contexts/context";
import { IoRemove } from "react-icons/io5";

const AddNewChat = () => {
  const { searchProfile, setSearchProfile, newChat, addChat, setAddMode } =
    useAppContext();
  return (
    <div className="w-max h-max absolute top-0 left-0 right-0 bottom-0 m-auto p-8 z-50 bg-white rounded-2xl shadow-2xl dark:bg-gray-700">
      <form className="flex justify-between gap-5">
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
          {/* <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg> */}
        </div>
      </form>
      {searchProfile && (
        <div className="user mt-8 flex flex-col items-start justify-between gap-5 overflow-scroll max-h-56 p-1">
          {newChat.map((chat, index) => (
            <div
              className="detail flex flex-row items-center gap-5"
              key={index}
            >
              <div className="flex items-center gap-5">
                <div className="relative inline-flex items-center justify-center w-14 h-14 ring-2 p-2 ring-gray-200 overflow-hidden bg-gray-300 rounded-full dark:ring-gray-600 dark:bg-gray-900 cursor-pointer">
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    {chat.profile}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold">{chat.name}</span>
                </div>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => addChat(index)}
              >
                Adicionar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddNewChat;
