import React from "react";

function FormModal() {
  return (
    <>
      <form className="text-gray-900 dark:text-white">
        <h1 className="font-semibold text-xl">Criar Nova Tarefa</h1>
        <div className="relative font-medium my-6 mx-0">
          <label htmlFor="title" className="inline-block text-sm">
            Título
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-4 text-sm resize-none bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="w-full p-4 text-sm resize-none bg-gray-50 text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="w-full p-4 text-sm resize-none bg-gray-50 text-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-text dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              fill-rule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          Adicionar Tarefa
        </button>
      </form>
    </>
  );
}

export default FormModal;
