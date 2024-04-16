"use client";
import ChatContent from "@/components/chat/chat-content";
import Detail from "@/components/chat/detail";
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
      <div className="bg-white relative w-full h-full rounded-lg p-5 text-gray-900 dark:text-white dark:bg-gray-800">
        <List />
        <ChatContent />
        <Detail />
      </div>
    </div>
  );
};

export default Chat;
