import React from "react";

interface Props {
  content: React.ReactNode;
}

const Modal = ({ content }: Props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center backdrop-opacity-10 backdrop-invert bg-black/30 z-[100]">
      {content}
    </div>
  );
};

export default Modal;
