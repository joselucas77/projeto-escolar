import { useEffect } from "react";
import { useTheme } from "next-themes";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Executa ao montar o componente
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <label className="flex cursor-pointer relative">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <div className="flex items-center w-16 h-8 px-1 rounded-full bg-blue-400 after:left-0 peer-checked:after:left-8 after:flex after:relative after:w-6 after:h-6 after:bg-white after:rounded-full"></div>
      </label>
    </>
  );
}

export default ThemeSwitch;
