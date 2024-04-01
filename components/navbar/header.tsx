"use client";
import React from "react";
import { useAppContext } from "@/contexts/context";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const Header = () => {
  const { navbarActive, toggleNavbar } = useAppContext();
  return (
    <header className="mb-12">
      <li className="relative">
        <div className="relative flex whitespace-nowrap">
          <div
            className="relative flex items-center justify-center min-w-16 h-16 duration-500 text-[2em] cursor-pointer"
            onClick={toggleNavbar}
          >
            {navbarActive ? <IoCloseOutline /> : <IoMenuOutline />}
          </div>
          <div className="relative flex h-16 text-[1.2em] font-medium items-center pl-2 uppercase tracking-wider duration-500">
            SIE
          </div>
        </div>
      </li>
    </header>
  );
};

export default Header;
