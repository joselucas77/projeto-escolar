"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./navItems";

const Links = () => {
  const pathName = usePathname();
  return (
    <>
      {navItems.map((link, index) => (
        <li
          key={index}
          className={`relative duration-500 hover:bg-gradient-to-bl hover:from-gray-100 hover:to-gray-200 dark:hover:bg-gradient-to-bl dark:hover:from-gray-900 dark:hover:to-gray-800 rounded-full mb-1 ${
            pathName === link.path
              ? "bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800"
              : ""
          }`}
        >
          <Link href={link.path} className="relative flex whitespace-nowrap">
            {link.title === "Chat" && (
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-[0.15em] -end-1 dark:border-gray-900">
                1
              </div>
            )}
            <div className="relative flex items-center justify-center min-w-16 h-16 text-2xl text-gray-900 dark:text-gray-100">
              {link.icon}
            </div>
            <div className="relative flex h-16 text-base font-medium items-center pl-2 uppercase tracking-wider text-gray-900  dark:text-gray-100">
              {link.title}
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Links;
