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
          className="relative flex items-center justify-center min-w-16 h-16 text-gray-950 text-4xl rounded-full dark:text-gray-300"
          onClick={toggleNavbar}
        >
          {navbarActive ? (
            <IoCloseOutline className="z-10" />
          ) : (
            <IoMenuOutline className="z-10" />
          )}
        </button>
        <div className="relative flex h-16 text-gray-900 text-2xl font-semibold items-center pl-2 uppercase tracking-wider dark:text-gray-300">
          SIE
        </div>
      </div>
    </li>
  );
};

export default Header;
