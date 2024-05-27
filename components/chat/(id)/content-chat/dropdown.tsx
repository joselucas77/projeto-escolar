"use client";
import { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [openDrop, setOpenDrop] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDrop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenDrop]);
  return (
    <>
      <div className="inline-flex self-center items-center" ref={dropdownRef}>
        <button
          id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          data-dropdown-placement="bottom-start"
          className="text-gray-900 hover:text-white border border-gray-400 hover:bg-gray-200  font-medium rounded-lg inline-flex self-center text-sm p-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          onClick={() => setOpenDrop(!openDrop)}
          type="button"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15"
          >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>
      </div>
      <div
        id="dropdownDots"
        className={`${
          openDrop ? "block" : "z-10 hidden"
        }  bg-gray-200 divide-y self-center max-h-32 divide-gray-100 rounded-lg shadow w-20 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul
          className="text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconButton"
        >
          <li>
            <button className="flex justify-start w-full px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Copiar
            </button>
          </li>
          <li>
            <button className="flex justify-start w-full px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Editar
            </button>
          </li>
          <li>
            <button className="flex justify-start w-full px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Deletar
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
