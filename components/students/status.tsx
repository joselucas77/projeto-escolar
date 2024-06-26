"use client";
import React from "react";
import { Status } from "@/api/datas/studants";

interface StatusProps {
  status: Status;
}

const StatusStudent = ({ status }: StatusProps) => {
  const statusText = () => {
    if (status === "aprovado") {
      return (
        <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          {status}
        </span>
      );
    }
    if (status === "pendente") {
      return (
        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {status}
        </span>
      );
    }
    if (status === "reprovado") {
      return (
        <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          {status}
        </span>
      );
    }
  };

  return <td className="uppercase">{statusText()}</td>;
};

export default StatusStudent;
