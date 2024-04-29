"use client";
import React from "react";
import { SexType } from "@/api/datas/studants";

interface SexProps {
  sex: SexType;
}

const SexStudent = ({ sex }: SexProps) => {
  const statusText = () => {
    if (sex === "masculino") {
      return (
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
          {sex}
        </span>
        // <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
        //   {sex}
        // </span>
      );
    } else {
      return (
        <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
          {sex}
        </span>
        // <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
        //   {status}
        // </span>
      );
    }
  };

  return <td className="px-6 py-2 uppercase">{statusText()}</td>;
};

export default SexStudent;
