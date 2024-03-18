import { useAppContext } from "@/app/api/utils/context";
import React from "react";

function FormModal() {
  const { closeModal, openToast } = useAppContext();
  return (
    <div className="relative p-[1.5rem] max-w-[530px] w-full z-[100] bg-white rounded-2xl shadow-3xl dark:bg-gray-700">
      <form className="text-gray-900 dark:text-white">
        <h1 className="font-semibold text-xl">Criar Nova Tarefa</h1>
        <button
          type="button"
          className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={closeModal}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="relative font-medium my-6 mx-0">
          <label htmlFor="title" className="inline-block text-sm">
            Título
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-4 text-sm resize-none bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Atividade de Matemática"
          />
        </div>
        <div className="relative font-medium my-6 mx-0">
          <label htmlFor="description" className="inline-block text-sm">
            Descrição
          </label>
          <textarea
            name="description"
            id="description"
            className="w-full p-4 text-sm resize-none bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            rows={4}
            placeholder="resolver os exercícios da página 34 do livro I"
          ></textarea>
        </div>
        <div className="relative font-medium my-6 mx-0">
          <label htmlFor="date" className="inline-block text-sm">
            Entrega
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="w-full p-4 text-sm resize-none bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-text dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-center"
        >
          <svg
            className="w-5 h-5 me-1 -ms-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          Adicionar Tarefa
        </button>
      </form>
    </div>
  );
}

export default FormModal;
