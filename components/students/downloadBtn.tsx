import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useAppContext } from "@/app/api/utils/context";

const DownloadTable = () => {
  const { currentPersons } = useAppContext();

  const exportPdf = async () => {
    const doc = new jsPDF({ orientation: "landscape" });
    autoTable(doc, {
      head: [["Matrícula", "Nome", "Sobrenome", "Idade", "Sexo", "Status"]],
      body: currentPersons.map((key) => [
        key.id,
        key.name,
        key.surname,
        key.age,
        key.sex,
        key.status,
      ]),
    });

    doc.save("table.pdf");

    // const doc = new jsPDF({ orientation: "landscape" });
    // autoTable(doc, {
    //   html: "#my-table",
    // });
    // doc.save("table.pdf");
  };
  return (
    <div className="relative justify-end items-center">
      <button
        type="button"
        className="py-2 px-3 inline-flex items-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={exportPdf}
      >
        <svg
          className="w-3 h-3 me-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
          <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
        </svg>
        Download
      </button>
    </div>
  );
};

export default DownloadTable;
