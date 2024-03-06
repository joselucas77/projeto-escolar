import React from "react";
import Items from "./items";
import BtnEditItem from "../taskMain/btnEditItem";
import BtnDeleteItem from "../taskMain/btnDeleteItem";
import BtnDoneTask from "../taskMain/btnDoneTask";
import { useAppContext } from "../../../utils/context";

const Tasks = () => {
  const { currentItems } = useAppContext();
  return (
    <>
      {currentItems.map((item, index) => (
        <div
          key={index}
          className="py-5 px-4 rounded-2xl bg-white dark:bg-gray-700 h-60 w-60 flex flex-col gap-2 relative"
        >
          <Items title={item.title} text={item.text} date={item.date} />
          <div className="flex flex-col justify-end text-center mt-3">
            <BtnDoneTask />
          </div>
          <BtnEditItem />
          <BtnDeleteItem />
        </div>
      ))}
    </>
  );
};

export default Tasks;
