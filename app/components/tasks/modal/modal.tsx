import React from "react";
import { useAppContext } from "../../../utils/context";

interface Props {
  content: React.ReactNode;
}

function Modal({ content }: Props) {
  const { closeModal } = useAppContext();
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-[100]">
      <div
        className="absolute top-0 left-0 w-full h-screen backdrop-opacity-10 backdrop-invert bg-black/30"
        onClick={closeModal}
      ></div>
      <div className="relative p-[1.5rem] max-w-[530px] w-full z-[100] bg-white rounded-2xl shadow-3xl dark:bg-gray-700">
        {content}
      </div>
    </div>
  );
}

export default Modal;
