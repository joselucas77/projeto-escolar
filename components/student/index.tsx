import React from "react";
import Table from "./table";
import ProfileCard from "./profileCard";
import ScoreCard from "./scoreCard";
import { getStudentById } from "@/api/datas/studants";

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
    <>
      <div className="mx-auto max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
            <ProfileCard
              name={student.name}
              surname={student.surname}
              status={student.status}
            />
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
            <ScoreCard />
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg mt-8">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Index;
