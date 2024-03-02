import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  // const audioClickRef = useRef(new Audio(clickSound));
  // const audioUncheckRef = useRef(new Audio(uncheckSound));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");

    // if (theme === "dark") {
    //   audioClickRef.current.play();
    // } else {
    //   audioUncheckRef.current.play();
    // }
  };
  return (
    <>
      <label className="flex cursor-pointer relative">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={toggleTheme}
          checked={theme === "light"}
        />
        <div className="flex items-center w-16 h-8 px-1 rounded-full bg-blue-400 after:content-[''] after:transition-all after:duration-300 after:left-0 peer-checked:after:left-8 after:flex after:relative after:w-6 after:h-6 after:bg-[url('../../public/moon.svg')] peer-checked:after:bg-[url('../../public/sun.svg')] after:bg-[length:16px_16px] after:bg-gray-50 after:bg-no-repeat after:bg-center after:rounded-full after:rotate-0 after:peer-checked:rotate-180 dark:bg-blue-800 dark:after:bg-gray-800 shadow-inner"></div>
      </label>
    </>
  );
}

export default ThemeSwitch;
