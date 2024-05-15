"use client";
import { MdDownloading } from "react-icons/md";
import { IoChevronDownOutline, IoChevronUp } from "react-icons/io5";
import Image from "next/image";
import { photoDetail } from "./photoDetail";
import { useState } from "react";

const SharedPhotos = () => {
  const [open, setOpen] = useState(false);
  const OpenDrop = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="font-medium text-sm">Fotos compartilhadas</span>
        <div
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full inline-flex self-center text-sm p-2 text-center cursor-pointer dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={OpenDrop}
        >
          {open ? (
            <IoChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          ) : (
            <IoChevronDownOutline className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          )}
        </div>
      </div>
      {open && (
        <div className="flex flex-col max-h-56 gap-5 mt-5 px-2 overflow-scroll">
          {photoDetail.map((image, index) => (
            <div className="flex items-center justify-between" key={index}>
              <div className="flex flex-row flex-wrap items-center gap-5">
                <Image
                  src={image.srcImage}
                  alt={image.alt}
                  className="w-10 h-10 rounded-md"
                />
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                  {image.alt}
                </span>
              </div>
              <MdDownloading className="w-5 h-5 text-gray-500 dark:text-gray-400 rounded-full cursor-pointer" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SharedPhotos;
