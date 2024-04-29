"use client";
import React from "react";
import StatusStudent from "./status";
import Link from "next/link";
import { useAppContext } from "@/contexts/context";
import SexStudent from "./sex";

const Table = () => {
  const { currentPersons } = useAppContext();
  return (
    <div className="rounded-lg overflow-x-auto shadow-md">
      <table
        className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        id="my-table"
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              matrícula
            </th>
            <th scope="col" className="px-6 py-3">
              Nome
            </th>
            <th scope="col" className="px-6 py-3">
              Sobrenome
            </th>
            <th scope="col" className="px-6 py-3">
              idade
            </th>
            <th scope="col" className="px-6 py-3">
              sexo
            </th>
            <th scope="col" className="px-6 py-3">
              status
            </th>
            <th scope="col" className="px-6 py-3">
              Perfil
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPersons.map((person) => (
            <tr
              key={person.id}
              className="bg-white border-b last:border-none dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {person.id}
              </th>
              <td className="px-6 py-3">{person.name}</td>
              <td className="px-6 py-3">{person.surname}</td>
              <td className="px-6 py-3">{person.age}</td>
              <SexStudent sex={person.sex} />
              <StatusStudent status={person.status} />
              <td className="px-6 py-3 text-right">
                <Link
                  href="/student/[id]"
                  as={`/student/${person.id}`}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Ver
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
