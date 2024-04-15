"use client";
import { useAppContext } from "@/contexts/context";

const Home = () => {
  const { navbarActive } = useAppContext();

  return (
    <main
      className={`absolute h-screen px-3 py-3 duration-500 animate-mainContainer ${
        navbarActive
          ? "w-[calc(100%-240px)] left-60"
          : "w-[calc(100%-80px)] left-20"
      }`}
    >
      <div className="bg-white relative w-full h-full rounded-lg p-5 grid grid-cols-2 gap-x-3 text-gray-900 dark:text-white dark:bg-gray-800"></div>
    </main>
  );
};

export default Home;
