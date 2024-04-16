import Link from "next/link";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

const SignOut = () => {
  return (
    <li className="relative hover:bg-gradient-to-bl hover:from-gray-100 hover:to-gray-200 dark:hover:bg-gradient-to-bl dark:hover:from-gray-900 dark:hover:to-gray-800 rounded-full mb-1">
      <Link href="/login" className="relative flex whitespace-nowrap">
        <div className="relative flex items-center justify-center min-w-16 h-16 text-2xl duration-500 text-gray-900 dark:text-gray-100">
          <IoLogOutOutline />
        </div>
        <div className="relative flex h-16 text-base font-medium items-center pl-2 uppercase tracking-wider duration-500 text-gray-900 dark:text-gray-100">
          Sair
        </div>
      </Link>
    </li>
  );
};

export default SignOut;
