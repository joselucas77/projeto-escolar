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
          className={`relative hover:bg-gradient-to-bl hover:from-gray-100 hover:to-gray-200 dark:hover:bg-gradient-to-bl dark:hover:from-gray-900 dark:hover:to-gray-800 rounded-full mb-1 ${
            pathName === link.path
              ? "bg-gradient-to-br from-gray-100 to-gray-200 duration-500 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800"
              : ""
          }`}
        >
          <Link
            href={link.path}
            className="relative flex whitespace-nowrap group"
          >
            <div className="relative flex items-center justify-center min-w-16 h-16 text-[1.5em]">
              {link.icon}
            </div>
            <div className="relative flex h-16 text-[1em] items-center pl-2 uppercase tracking-wider">
              {link.title}
            </div>
          </Link>
        </li>
      ))}
    </>
  );
}

export default LinksNav;
