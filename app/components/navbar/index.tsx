"use client";
import React from "react";
import {
  IoMenuOutline,
  IoHomeOutline,
  IoPeopleOutline,
  IoClipboardOutline,
  IoChatbubblesOutline,
  IoSettingsOutline,
  IoLogOutOutline,
  IoCloseOutline,
} from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppContext } from "../../utils/context";
import ThemeSwitch from "./footer/themeSwitch";
import LinksNav from "./main/linksNav";
import SignOutLink from "./footer/signOutLink";
import HeaderLink from "./header/headerLink";

const navItems = [
  {
    icon: <IoHomeOutline className="z-10" />,
    title: "Home",
    path: "/",
  },
  {
    icon: <IoPeopleOutline className="z-10" />,
    title: "Alunos",
    path: "/students",
  },
  {
    icon: <IoClipboardOutline className="z-10" />,
    title: "Tarefas",
    path: "/tasks",
  },
  {
    icon: <IoChatbubblesOutline className="z-10" />,
    title: "Chat",
    path: "/chat",
  },
  {
    icon: <IoSettingsOutline className="z-10" />,
    title: "Configurações",
    path: "/settings",
  },
];

function Navbar() {
  const pathName = usePathname();
  const { navbarActive, toggleNavbar } = useAppContext();
  return (
    <nav
      className={`absolute h-screen px-2 text-gray-900 bg-blue-500 overflow-hidden  duration-500 dark:text-white dark:bg-blue-900 ${
        navbarActive ? "w-60" : "w-20"
      }`}
    >
      <ul className="relative h-screen">
        <header className="mb-12">
          <li className="relative">
            <HeaderLink />
          </li>
        </header>
        <main>
          <LinksNav />
        </main>
        <footer className="absolute w-full bottom-4">
          <li className="relative hover:bg-gradient-to-bl hover:from-gray-100 hover:to-gray-200 dark:hover:bg-gradient-to-bl dark:hover:from-gray-900 dark:hover:to-gray-800 rounded-full mb-1">
            <SignOutLink />
          </li>
          <li
            className={`relative flex justify-start items-center transition-all duration-500 whitespace-nowrap ${
              navbarActive ? "left-4" : "left-0"
            }`}
          >
            <ThemeSwitch />
          </li>
        </footer>
      </ul>
    </nav>
  );
}

export default Navbar;
