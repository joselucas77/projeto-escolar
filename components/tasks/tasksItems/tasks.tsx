import React from "react";
import Items from "./items";
import BtnDoneTask from "../taskMain/btnDoneTask";
import Dropdown from "../taskMain/dropdown";
import { useAppContext } from "@/contexts/context";

const Tasks = () => {
  const { currentItems } = useAppContext();
  return (
    <>
      {currentItems.map((item) => (
        <div
          key={item.id}
          className="py-5 px-4 rounded-2xl bg-gray-100 dark:bg-gray-700 h-60 w-60 flex flex-col gap-2 relative"
        >
          <Items
            title={item.title}
            description={item.description}
            date={item.date}
          />
          <div className="flex flex-col justify-end text-center mt-3">
            <BtnDoneTask />
          </div>
          <Dropdown
            title={item.title}
            description={item.description}
            date={item.date}
          />
        </div>
      ))}
    </>
  );
};

export default Tasks;
