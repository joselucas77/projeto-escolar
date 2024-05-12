"use client";
import Content from "./card-task/content";
import FinishTask from "./card-task/finish-task";
import Dropdown from "./card-task/dropdown";
import { useAppContext } from "@/contexts/context";

const CardTasks = () => {
  const { currentItems } = useAppContext();
  return (
    <div className="grid gap-y-6 my-4 mx-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
      {currentItems.map((item) => (
        <div
          key={item.id}
          className="py-5 px-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600 h-60 w-80 flex flex-col gap-4 relative"
        >
          <Content
            title={item.title}
            description={item.description}
            date={item.date}
          />
          <FinishTask />
          <Dropdown
            title={item.title}
            description={item.description}
            date={item.date}
          />
        </div>
      ))}
    </div>
  );
};

export default CardTasks;
