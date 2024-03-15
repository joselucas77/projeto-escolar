"use client";
import StudentsIndex from "../../components/students";
import { useAppContext } from "../../api/utils/context";

export default function Students() {
  const { navbarActive } = useAppContext();
  return (
    <div
      className={`absolute h-screen px-3 py-3 bg-gray-300 dark:bg-gray-900 duration-500 ${
        navbarActive
          ? "w-[calc(100%-240px)] left-60"
          : "w-[calc(100%-80px)] left-20"
      }`}
    >
      <div className="bg-white relative w-full h-full rounded-lg p-5 text-gray-900 dark:text-white dark:bg-gray-800">
        <StudentsIndex />
      </div>
    </div>
  );
}
