"use client";
import React from "react";
import { useAppContext } from "@/contexts/context";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const Header = () => {
  const { navbarActive, toggleNavbar } = useAppContext();
  return (
    <li className="relative my-6">
      <div className="relative flex whitespace-nowrap">
        <button
          className="relative flex items-center justify-center min-w-16 h-16 duration-500 text-gray-950 text-4xl hover:bg-gradient-to-bl hover:from-gray-200 hover:to-gray-300 rounded-full dark:hover:bg-gradient-to-bl dark:hover:from-gray-700 dark:hover:to-gray-800 dark:text-gray-300"
          onClick={toggleNavbar}
        >
          {navbarActive ? (
            <IoCloseOutline className="z-10" />
          ) : (
            <IoMenuOutline className="z-10" />
          )}
        </button>
        <div className="relative flex h-16 text-gray-900 text-2xl font-semibold items-center pl-2 uppercase tracking-wider duration-500 dark:text-gray-300">
          SIE
        </div>
      </div>
    </li>
  );
};

export default Header;
