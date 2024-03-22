import React from "react";
import Items from "./items";
import BtnDoneTask from "../taskMain/btnDoneTask";
import { useAppContext } from "../../../api/utils/context";
import Dropdown from "../taskMain/dropdown";

const Tasks = () => {
  const { currentItems } = useAppContext();
  return (
    <>
      {currentItems.map((item, index) => (
        <div
          key={index}
          className="py-5 px-4 rounded-2xl bg-gray-100 dark:bg-gray-700 h-60 w-60 flex flex-col gap-2 relative"
        >
          <Items title={item.title} text={item.text} date={item.date} />
          <div className="flex flex-col justify-end text-center mt-3">
            <BtnDoneTask />
          </div>
          <Dropdown />
        </div>
      ))}
    </>
  );
};

export default Tasks;
