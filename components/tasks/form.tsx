"use client";
import { useAppContext } from "@/contexts/context";
import React, { useEffect, useState } from "react";

function FormModal({
  titleForm,
  titleTask,
  descriptioTask,
  dateTask,
}: {
  titleForm: string;
  titleTask?: string;
  descriptioTask?: string;
  dateTask?: string;
}) {
  const { closeModal, handleUpdate, handleCraete } = useAppContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<string>("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [dateError, setDateError] = useState(false);

  useEffect(() => {
    if (titleTask && descriptioTask && dateTask) {
      setTitle(titleTask);
      setDescription(descriptioTask);
      setDate(dateTask);
    }
  }, [titleTask, descriptioTask, dateTask]);

  const validateForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!title || !description || !date) {
      if (!title) {
        setTitleError(true);
      }
      if (!description) {
        setDescriptionError(true);
      }
      if (!date) {
        setDateError(true);
      }
      return;
    }

    setTitleError(false);
    setDescriptionError(false);
    setDateError(false);

    if (titleTask && descriptioTask && dateTask) {
      handleUpdate();
    } else {
      handleCraete();
    }

    setTitle("");
    setDescription("");
    setDate("");
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    setDateError(false);
  };
  return (
    <div className="relative p-[1.5rem] max-w-[530px] w-full z-[100] bg-white rounded-2xl shadow-3xl dark:bg-gray-700">
      <form className="text-gray-900 dark:text-white" onSubmit={validateForm}>
        <h1 className="font-semibold text-xl">{titleForm}</h1>
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
            className="w-full p-4 text-sm resize-none bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Atividade de Matemática"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setTitleError(false);
            }}
          />
          {titleError && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Título é obrigatório!
            </p>
          )}
        </div>
        <div className="relative font-medium my-6 mx-0">
          <label htmlFor="description" className="inline-block text-sm">
            Descrição
          </label>
          <textarea
            name="description"
            id="description"
            className="w-full p-4 text-sm resize-none bg-gray-50 text-gray-800 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            rows={4}
            placeholder="resolver os exercícios da página 34 do livro I"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setDescriptionError(false);
            }}
          ></textarea>
          {descriptionError && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Descrição é
              obrigatória!
            </p>
          )}
        </div>
        <div className="relative font-medium my-6 mx-0">
          <label htmlFor="date" className="inline-block text-sm">
            Entrega
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="w-full p-4 text-sm resize-none bg-gray-50 text-gray-400 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-text dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={date || ""}
            onChange={handleDateChange}
          />
          {dateError && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Data de entrega é
              obrigatória!
            </p>
          )}
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
