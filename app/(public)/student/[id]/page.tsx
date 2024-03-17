"use client";
import React from "react";
import { getStudentById } from "../../../api/datas/studantsData";
import { useAppContext } from "../../../api/utils/context";
import Index from "@/app/components/student";

interface StudantProps {
  params: { id: string };
}

const Student = ({ params }: StudantProps) => {
  const { navbarActive } = useAppContext();
  return (
    <div
      className={`absolute h-screen px-3 py-3 bg-gray-300 dark:bg-gray-900 duration-500 ${
        navbarActive
          ? "w-[calc(100%-240px)] left-60"
          : "w-[calc(100%-80px)] left-20"
      }`}
    >
      <div className="bg-white relative w-full h-full rounded-lg p-5 text-gray-900 dark:text-white dark:bg-gray-800">
        {/* <Card name={student.name} surname={student.surname} />
        <Table /> */}
        <Index params={params} />
      </div>
    </div>
  );
};

export default Student;
