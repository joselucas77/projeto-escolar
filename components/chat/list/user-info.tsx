"use client";
import React from "react";
import { useAppContext } from "@/contexts/context";
import { IoEllipsisHorizontalOutline, IoCreateOutline } from "react-icons/io5";

const UserInfo = () => {
  const { navbarActive } = useAppContext();
  return (
    <div className="flex items-center justify-between pb-2">
      <div className="flex items-center gap-3">
        <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden ring-2 p-1 ring-gray-200 bg-gray-300 rounded-full dark:ring-gray-700 dark:bg-gray-900 cursor-default">
          <span className="font-medium text-xl text-gray-800 dark:text-gray-300">
            JL
          </span>
        </div>
        <h2
          className={`font-semibold transition-all duration-500 ${
            navbarActive ? "text-lg" : "text-xl"
          }`}
        >
          José Lucas
        </h2>
      </div>
      <div className="flex gap-5 px-2">
        <IoEllipsisHorizontalOutline className="w-5 h-5 cursor-pointer" />
        <IoCreateOutline className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default UserInfo;
