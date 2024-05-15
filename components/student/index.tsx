import React from "react";
import Table from "./table";
import ProfileCard from "./profileCard";
import ScoreCard from "./scoreCard";
import { getStudentById } from "@/api/datas/studants";
import Link from "next/link";
import { IoArrowUndo } from "react-icons/io5";

interface StudantProps {
  params: { id: string };
}

const Index = ({ params }: StudantProps) => {
  const studentId = parseInt(params.id);

  const student = getStudentById(studentId);

  if (!student) {
    return <div>Aluno não encontrado com o ID {studentId}</div>;
  }
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="grid grid-cols-2 gap-5">
        <Link href={"/students"} className="absolute z-50 left-[-2%] top-[28%]">
          <button
            type="button"
            className="text-gray-900 bg-gray-300 hover:bg-gray-900 hover:text-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:text-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:hover:bg-gray-100 dark:focus:ring-blue-800"
          >
            <IoArrowUndo />
            {/* <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg> */}
          </button>
        </Link>
        <ProfileCard
          name={student.name}
          surname={student.surname}
          status={student.status}
        />
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
          <ScoreCard />
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg mt-5">
        <Table />
      </div>
    </div>
  );
};

export default Index;
