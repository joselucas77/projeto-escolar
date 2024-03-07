import React from "react";
import { useAppContext } from "../../utils/context";

function Table() {
  const { currentPersons } = useAppContext();
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            matrícula
          </th>
          <th scope="col" className="px-6 py-3">
            Perfil
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
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {currentPersons.map((person) => (
          <tr
            key={person.registration}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {person.registration}
            </th>
            <td className="px-6 py-2">
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  className="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </td>
            <td className="px-6 py-4">{person.name}</td>
            <td className="px-6 py-4">{person.surname}</td>
            <td className="px-6 py-4">{person.age}</td>
            <td className="px-6 py-4">{person.sex}</td>
            <td className="px-6 py-4">{person.status}</td>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Ver Perfil
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
