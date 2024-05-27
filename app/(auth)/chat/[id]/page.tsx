"use client";
import ChatContent from "@/components/chat/(id)/chat-content";
import Detail from "@/components/chat/(id)/detail";
import List from "@/components/chat/list";
// import List from "@/components/chat/(id)/list";
import { useAppContext } from "@/contexts/context";

interface ChatProps {
  params: { id: string };
}

const Message = ({ params }: ChatProps) => {
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
        <Detail />
        <ChatContent params={params} />
      </div>
    </div>
  );
};

export default Message;
