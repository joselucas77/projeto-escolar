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
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppContext } from "../../utils/context";
import ThemeSwitch from "./themeSwitch";

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
      className={`absolute h-screen pl-2 duration-500 bg-blue-500 overflow-hidden ${
        navbarActive ? "w-20" : "w-60"
      }`}
    >
      <ul className="relative h-screen">
        <header className="mb-12">
          <li className="relative">
            <Link href={"#"} className="relative flex whitespace-nowrap">
              <div
                className="relative flex items-center justify-center min-w-16 h-16 duration-500 text-[2em]"
                onClick={toggleNavbar}
              >
                {navbarActive ? <IoMenuOutline /> : <IoCloseOutline />}
              </div>
              <div className="relative flex h-16 text-[1.2em] font-medium items-center pl-2 uppercase tracking-wider	duration-500">
                SIE
              </div>
            </Link>
          </li>
        </header>
        <main>
          {navItems.map((link, index) => (
            <li
              key={index}
              className={`relative ${
                pathName === link.path
                  ? "bg-white rounded-l-[50px] before:absolute before:w-5 before:h-5 before:right-0 before:-top-5 before:rounded-br-3xl before:shadow-[5px_5px_0_5px] before:shadow-white	before:bg-transparent after:absolute after:w-5 after:h-5 after:right-0 after:-bottom-5 after:rounded-tr-3xl after:shadow-[5px_-5px_0_5px] after:shadow-white after:bg-transparent"
                  : ""
              }`}
            >
              <Link
                href={link.path}
                className={`relative flex whitespace-nowrap group ${
                  pathName === link.path
                    ? "text-blue-500 hover:text-blue-600"
                    : "hover:text-white"
                }`}
              >
                <div
                  className={`relative flex items-center justify-center min-w-16 h-16 text-[1.5em] duration-500 hover:text-white ${
                    pathName === link.path
                      ? "text-white before:absolute before:w-14 before:h-14 before:bg-blue-500 before:rounded-full before:duration-500 group-hover:before:bg-blue-600"
                      : ""
                  }`}
                >
                  {link.icon}
                </div>
                <div
                  className={`relative flex h-16 text-[1em] items-center pl-2 uppercase tracking-wider	duration-500`}
                >
                  {link.title}
                </div>
              </Link>
            </li>
          ))}
        </main>
        <footer className="absolute w-full bottom-4">
          <li className="relative">
            <Link
              href={"#"}
              className="relative flex whitespace-nowrap hover:text-white"
            >
              <div className="relative flex items-center justify-center min-w-16 h-16 text-[1.5em] duration-500">
                <IoLogOutOutline />
              </div>
              <div className="relative flex h-16 text-[1em] items-center pl-2 uppercase tracking-wider	duration-500">
                Sair
              </div>
            </Link>
          </li>
          <li className="relative flex items-center justify-center">
            <ThemeSwitch />
          </li>
        </footer>
      </ul>
    </nav>
  );
}

export default Navbar;
