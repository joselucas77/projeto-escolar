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
          className={`relative hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg ${
            pathName === link.path
              ? "bg-white duration-500 dark:bg-gray-900 mb-1"
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
