"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "@/contexts/context";
import { Task } from "@/api/datas/task";
import FormModal from "../form";

const Dropdown = ({ title, description, date }: Task) => {
  const { openPopUpModal, openModal, setModalContent } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openFormModal = () => {
    openModal();
    setModalContent(
      <FormModal
        titleForm="Editar Tarefa"
        titleTask={title}
        descriptioTask={description}
        dateTask={date}
      />
    );
  };

  return (
    <div className="absolute top-8 right-4 -translate-y-2/4" ref={dropdownRef}>
      <button
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600"
        type="button"
        onClick={toggleDropdown}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 3"
        >
          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-10 left-0 mt-2 w-24 bg-white rounded-lg shadow-lg dark:bg-gray-700`}
      >
        <ul className="py-2 text-sm text-gray-900 dark:text-gray-50">
          <li>
            <button
              className="block w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              onClick={openFormModal}
            >
              Editar
            </button>
          </li>
          <li>
            <button
              className="block w-full py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
              onClick={openPopUpModal}
            >
              Deletar
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
