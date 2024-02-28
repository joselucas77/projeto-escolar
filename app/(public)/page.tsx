"use client";
import { useAppContext } from "../utils/context";

export default function Home() {
  const { navbarActive } = useAppContext();
  return (
    <div
      className={`absolute w-[calc(100%-250px)] left-60 duration-[500ms] bg-zinc-50 dark:bg-black ${
        navbarActive ? "w-[calc(100%-80px)] left-20" : ""
      }`}
    >
      <div className="relative w-full p-5 grid grid-cols-2 gap-x-3">Home</div>
    </div>
  );
}
