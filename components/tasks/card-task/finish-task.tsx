"use client";
import { useAppContext } from "@/contexts/context";

const FinishTask = () => {
  const { handleTaskCompleted } = useAppContext();
  return (
    <div className="flex flex-col justify-end text-center mt-3">
      <button
        className="font-semibold cursor-pointer transition-all text-white bg-gray-500 px-6 py-2 rounded-lg border-gray-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px] dark:bg-gray-800 dark:border-gray-900 dark:text-white"
        onClick={handleTaskCompleted}
      >
        Finalizar{" "}
      </button>
    </div>
  );
};

export default FinishTask;
