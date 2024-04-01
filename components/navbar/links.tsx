"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./navItems";

const Links = () => {
  const pathName = usePathname();
  return (
    <main>
      {navItems.map((link, index) => (
        <li
          key={index}
          className={`relative duration-500 hover:bg-gradient-to-bl hover:from-gray-100 hover:to-gray-200 dark:hover:bg-gradient-to-bl dark:hover:from-gray-900 dark:hover:to-gray-800 rounded-full mb-1 ${
            pathName === link.path
              ? "bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800"
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
    </main>
  );
};

export default Links;
