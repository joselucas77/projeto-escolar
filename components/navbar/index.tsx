"use client";
import { useAppContext } from "@/contexts/context";
import Header from "./header";
import Links from "./links";
import SignOut from "./sign-out";
import ThemeSwitch from "./theme-switch";

const Navbar = () => {
  const { navbarActive } = useAppContext();
  return (
    <nav
      className={`absolute h-screen px-2 text-gray-900 bg-blue-500 overflow-hidden  duration-500 dark:text-white dark:bg-blue-900 ${
        navbarActive ? "w-60" : "w-20"
      }`}
    >
      <ul className="relative h-screen">
        <Header />
        <Links />
        <footer className="absolute w-full bottom-4">
          <SignOut />
          <ThemeSwitch />
        </footer>
      </ul>
    </nav>
  );
};

export default Navbar;
