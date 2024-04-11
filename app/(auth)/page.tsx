"use client";
import { useAppContext } from "@/contexts/context";
import { motion } from "framer-motion";

const Home = () => {
  const { navbarActive, handleDelete, toasts } = useAppContext();

  return (
    <motion.main
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className={`absolute h-screen px-3 py-3 duration-500 ${
        navbarActive
          ? "w-[calc(100%-240px)] left-60"
          : "w-[calc(100%-80px)] left-20"
      }`}
    >
      <div className="bg-white relative w-full h-full rounded-lg p-5 grid grid-cols-2 gap-x-3 text-gray-900 dark:text-white dark:bg-gray-800"></div>
    </motion.main>
  );
};

export default Home;
