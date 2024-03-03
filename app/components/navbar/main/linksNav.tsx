import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  IoChatbubblesOutline,
  IoClipboardOutline,
  IoHomeOutline,
  IoPeopleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

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

function LinksNav() {
  const pathName = usePathname();
  return (
    <>
      {navItems.map((link, index) => (
        <li
          key={index}
          className={`relative ${
            pathName === link.path
              ? "bg-white rounded-l-[50px] duration-500 before:absolute before:w-5 before:h-5 before:right-0 before:-top-5 before:rounded-br-3xl before:shadow-[5px_5px_0_5px] before:shadow-white before:transition-shadow	before:bg-transparent before:delay-0 after:absolute after:w-5 after:h-5 after:right-0 after:-bottom-5 after:rounded-tr-3xl after:shadow-[5px_-5px_0_5px] after:delay-0 after:shadow-white after:transition-shadow after:bg-transparent  dark:bg-gray-900 dark:after:shadow-gray-900 dark:before:shadow-gray-900"
              : ""
          }`}
        >
          <Link
            href={link.path}
            className={`relative flex whitespace-nowrap group ${
              pathName === link.path
                ? "text-blue-500 hover:text-blue-600"
                : "hover:text-white dark:text-white dark:hover:text-black"
            }`}
          >
            <div
              className={`relative flex items-center justify-center min-w-16 h-16 text-[1.5em] duration-500 ${
                pathName === link.path
                  ? "text-black before:absolute before:w-14 before:h-14 before:bg-blue-500 before:rounded-full before:duration-500 group-hover:before:bg-blue-600 dark:before:bg-blue-900 dark:group-hover:before:bg-blue-950 dark:text-white"
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
    </>
  );
}

export default LinksNav;
