"use client";
import { useAppContext } from "../../utils/context";
import TasksIndex from "../../components/tasks";

export default function Tasks() {
  const { navbarActive } = useAppContext();
  return (
    <section
      className={`absolute h-screen px-3 py-3 bg-gray-400 dark:bg-gray-900 duration-500 ${
        navbarActive
          ? "w-[calc(100%-240px)] left-60"
          : "w-[calc(100%-80px)] left-20"
      }`}
    >
      <main className="bg-gray-200 relative w-full h-full rounded-lg p-5 flex text-gray-900 dark:text-white dark:bg-gray-800">
        <TasksIndex />
      </main>
    </section>
  );
}
