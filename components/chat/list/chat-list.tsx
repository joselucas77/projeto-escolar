"use client";
import { IoAdd, IoRemove, IoChatbubbleOutline } from "react-icons/io5";
import { useAppContext } from "@/contexts/context";
import Link from "next/link";
import AddNewChat from "../add-chat/form";

const ChatList = () => {
  const {
    searchChat,
    setSearchChat,
    chat,
    addMode,
    setAddMode,
    chatHome,
    navbarActive,
  } = useAppContext();
  return (
    <div className="flex flex-col p-1 shadow-inner rounded-lg">
      <div className="flex flex-row flex-wrap space-y-4 gap-2 sm:space-y-0 items-center justify-between py-4 px-1">
        <div
          className={`transition-all duration-500 ${
            chatHome ? "w-[94%]" : `${navbarActive ? "w-44" : "w-52"}`
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
              value={searchChat}
              onChange={(e) => setSearchChat(e.target.value)}
              placeholder="Pesquise"
            />
          </div>
        </div>
        <div
          className="flex justify-center items-center text-2xl text-gray-500 bg-gray-200 w-8 h-8 rounded-lg cursor-pointer shadow-inner border-2 border-solid border-gray-50 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-700"
          onClick={() => setAddMode((prev) => !prev)}
        >
          {addMode ? <IoRemove /> : <IoAdd />}
        </div>
      </div>
      <div className="flow-root py-1 pr-2 max-h-[30rem] overflow-scroll">
        <ul role="list">
          {chat.map((item, index) => (
            <li
              key={index}
              className="py-3 px-2 cursor-pointer rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <Link href="/chat/[id]" as={`/chat/${item.id}`}>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden ring-2 p-1 ring-gray-200 bg-gray-300 rounded-full dark:ring-gray-700 dark:bg-gray-900 cursor-default">
                      <span className="font-medium text-lg text-gray-800 dark:text-gray-300">
                        {item.profile}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {item.name}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <IoChatbubbleOutline />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {addMode && <AddNewChat />}
    </div>
  );
};

export default ChatList;
