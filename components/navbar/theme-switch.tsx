"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useAppContext } from "@/contexts/context";

const ThemeSwitch = () => {
  const { navbarActive } = useAppContext();
  const { theme, setTheme } = useTheme();
  const audioClickRef = useRef(new Audio("/click1.wav"));
  const audioUncheckRef = useRef(new Audio("/click2.wav"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");

    if (theme === "dark") {
      audioClickRef.current.play();
    } else {
      audioUncheckRef.current.play();
    }
  };
  return (
    <li
      className={`relative flex justify-start items-center transition-all duration-500 whitespace-nowrap ${
        navbarActive ? "left-4" : "left-0"
      }`}
    >
      <label className="flex cursor-pointer relative items-center">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={toggleTheme}
          checked={theme === "light"}
        />
        <div className="darkMode flex items-center w-16 h-8 px-1 rounded-full bg-blue-400 after:content-[''] after:transition-all after:duration-300 after:left-0 peer-checked:after:left-8 after:flex after:relative after:w-6 after:h-6 after:bg-[url('/moon.svg')] peer-checked:after:bg-[url('/sun.svg')] after:bg-[length:16px_16px] after:bg-gray-50 after:bg-no-repeat after:bg-center after:rounded-full after:rotate-0 after:peer-checked:rotate-180 dark:bg-blue-800 dark:after:bg-gray-800 shadow-inner"></div>
        <span className="relative flex h-16 text-[1em] items-center pl-2 uppercase tracking-wider">
          {theme === "dark" ? "Modo Dark" : "Modo Light"}
        </span>
      </label>
    </li>
  );
};

export default ThemeSwitch;
