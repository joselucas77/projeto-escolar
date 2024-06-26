"use client";
import List from "@/components/chat/list";
import { useAppContext } from "@/contexts/context";

const Chat = () => {
  const { navbarActive } = useAppContext();
  return (
    <div
      className={`absolute h-screen px-3 py-3 bg-gray-300 dark:bg-gray-900 duration-500 animate-mainContainer ${
        navbarActive
          ? "w-[calc(100%-240px)] left-60"
          : "w-[calc(100%-80px)] left-20"
      }`}
    >
      <div className="bg-white relative flex flex-row gap-1 w-full h-full rounded-lg py-5 text-gray-900 dark:text-white dark:bg-gray-800">
        <List />
      </div>
    </div>
  );
};

export default Chat;
