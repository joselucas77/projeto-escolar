// import { Zoom, toast } from "react-toastify";

// export const SuccessToast = (
//   theme: "dark" | "light" | "colored",
//   title: string
// ) => {
//   toast.success(title, {
//     position: "top-center",
//     icon: () => (
//       <svg
//         className="w-5 h-5"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="currentColor"
//         viewBox="0 0 20 20"
//       >
//         <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//       </svg>
//     ),
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: theme,
//     transition: Zoom,
//   });
// };

"use client";
import React from "react";
import { motion } from "framer-motion";
import { useAppContext } from "@/contexts/context";

const SuccessToast = () => {
  const { toggleToast } = useAppContext();
  return (
    <motion.section
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 20, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="absolute top-0 p-4 z-10 toast"
    >
      <dialog
        open
        className="relative bg-blue-600 text-white flex items-center w-80 gap-4 p-4 mb-4 shadow-lg rounded-2xl dark:bg-blue-950 "
      >
        <section className="flex items-center gap-4">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <div className="w-36">
            <p className="text-ellipsis overflow-hidden text-base line-clamp-1">
              Tarefa concluida!
            </p>
          </div>
        </section>
        <div className="bg-blue-500 w-[1px] h-8 dark:bg-blue-900"></div>
        <form method="dialog">
          <button
            className="text-green-300 text-base font-semibold"
            onClick={toggleToast}
          >
            Fechar
          </button>
        </form>
      </dialog>
    </motion.section>
  );
};

export default SuccessToast;
