import React, { useState } from "react";

const Table = () => {
  const [notas, setNotas] = useState([
    {
      id: 1,
      avaliacao: "Avaliação I",
      prova: 9.0,
      atividades: 1,
      editing: false,
    },
    {
      id: 2,
      avaliacao: "Avaliação II",
      prova: 8.0,
      atividades: 2.0,
      editing: false,
    },
    {
      id: 3,
      avaliacao: "Avaliação III",
      prova: 5.0,
      atividades: 1.0,
      editing: false,
    },
    {
      id: 4,
      avaliacao: "Avaliação IV",
      prova: 8.0,
      atividades: 1.5,
      editing: false,
    },
  ]);

  const handleEdit = (id: number) => {
    setNotas((prevNotas) =>
      prevNotas.map((nota) =>
        nota.id === id ? { ...nota, editing: !nota.editing } : nota
      )
    );
  };

  const [grade, setGrade] = useState(0);

  const handleDecrementGrade = (grade: number) => {
    for (let index = grade; index > 0; ) {
      setGrade((prevGrade) => prevGrade - 0.5);
    }
  };

  const handleIncrementGrade = (grade: number) => {
    for (let index = grade; index < 10; ) {
      setGrade((prevGrade) => prevGrade + 0.5);
    }
  };

  const [activity, setActivity] = useState(0);

  const handleDecrementActivity = (activity: number) => {
    if (activity > 0) {
      setActivity((prevActivity) => prevActivity - 0.5);
    }
  };

  const handleIncrementActivity = (activity: number) => {
    if (activity < 10) {
      setActivity((prevActivity) => prevActivity + 0.5);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Avaliações
            </th>
            <th scope="col" className="px-6 py-3">
              Prova
            </th>
            <th scope="col" className="px-6 py-3">
              Atividades
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
            <th scope="col" className="px-6 py-3">
              Alterar
            </th>
          </tr>
        </thead>
        <tbody>
          {notas.map((nota, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {nota.avaliacao}
              </th>
              {nota.editing ? (
                <td className="px-6 py-2">
                  <div className="relative flex items-center max-w-[8rem]">
                    <button
                      type="button"
                      id="decrement-button"
                      className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 h-8"
                      onClick={() => handleDecrementGrade(nota.prova)}
                    >
                      <svg
                        className="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="quantity-input"
                      max={10}
                      min={0}
                      className="bg-gray-50 border-x-0 border-gray-300 h-8 w-8 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={grade}
                      disabled
                    />
                    <button
                      type="button"
                      id="increment-button"
                      className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2 h-8"
                      onClick={() => handleIncrementGrade(nota.prova)}
                    >
                      <svg
                        className="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              ) : (
                <td className="px-6 py-4">{nota.prova}</td>
              )}
              {nota.editing ? (
                <td className="px-6 py-2">
                  <div className="relative flex items-center max-w-[8rem]">
                    <button
                      type="button"
                      id="decrement-button"
                      className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 h-8"
                      onClick={() => handleDecrementActivity(nota.atividades)}
                    >
                      <svg
                        className="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="quantity-input"
                      max={10}
                      min={0}
                      className="bg-gray-50 border-x-0 border-gray-300 h-8 w-8 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={activity}
                      disabled
                    />
                    <button
                      type="button"
                      id="increment-button"
                      className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2 h-8"
                      onClick={() => handleIncrementActivity(nota.atividades)}
                    >
                      <svg
                        className="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              ) : (
                <td className="px-6 py-4">{nota.atividades}</td>
              )}
              <td className="px-6 py-4">{nota.prova + nota.atividades}</td>
              <td className="px-6 py-4">
                <button
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => handleEdit(nota.id)}
                >
                  {nota.editing ? "Salvar" : "Editar"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

{
  /* <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Avaliação I
            </th>
            <td className="px-6 py-4">{grade}</td>
            <td className="px-6 py-2">
              <div className="relative flex items-center max-w-[8rem]">
                <button
                  type="button"
                  id="decrement-button"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-10"
                  onClick={handleDecrementGrade}
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  className="bg-gray-50 border-x-0 border-gray-300 h-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={grade}
                  disabled
                />
                <button
                  type="button"
                  id="increment-button"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-10"
                  onClick={handleIncrementGrade}
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
            </td>
            <td className="px-6 py-4">1.5</td>
            <td className="px-6 py-4">9.0</td>
            <td className="px-6 py-4">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Editar
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Avaliação II
            </th>
            <td className="px-6 py-4">8.0</td>
            <td className="px-6 py-4">2.0</td>
            <td className="px-6 py-4">10</td>
            <td className="px-6 py-4">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Editar
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Avaliação III
            </th>
            <td className="px-6 py-4">5.0</td>
            <td className="px-6 py-4">1.0</td>
            <td className="px-6 py-4">6</td>
            <td className="px-6 py-4">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Editar
              </button>
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Avaliação IV
            </th>
            <td className="px-6 py-4">8.0</td>
            <td className="px-6 py-4">1.5</td>
            <td className="px-6 py-4">9.5</td>
            <td className="px-6 py-4">
              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Editar
              </button>
            </td>
          </tr>
        </tbody> */
}
