import React from "react";
import { MdDownloading } from "react-icons/md";
import { IoChevronUp, IoChevronDownOutline } from "react-icons/io5";
import image1 from "@/public/chat1.jpg";
import image2 from "@/public/chat2.jpg";
import image3 from "@/public/chat3.jpg";
import image4 from "@/public/chat4.jpg";
import Image from "next/image";

const Detail = () => {
  return (
    <div className="basis-1/4">
      <div className="flex justify-center items-center flex-col gap-2 p-2 border-b border-gray-300 dark:border-gray-900">
        <div className="relative inline-flex items-center justify-center w-14 h-14 overflow-hidden ring-2 p-1 ring-gray-200 bg-gray-300 rounded-full dark:ring-gray-700 dark:bg-gray-900 cursor-default">
          <span className="font-medium text-xl text-gray-800 dark:text-gray-300">
            JL
          </span>
        </div>
        <h2>Ana Silva</h2>
      </div>
      <div className="info flex flex-col p-5 gap-5">
        <div className="option">
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm">Geral</span>
            <button className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full inline-flex self-center text-sm p-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
              <IoChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>
        <div className="option">
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm">Privacidade & ajuda</span>
            <div className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full inline-flex self-center text-sm p-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
              <IoChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm">Fotos compartilhadas</span>
            <div className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full inline-flex self-center text-sm p-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
              <IoChevronDownOutline className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
          <div className="photos flex flex-col gap-5 mt-5">
            <div className="photo-item flex items-center justify-between">
              <div className="photoDetail flex items-center gap-5">
                <Image
                  src={image1}
                  alt="shared-photo"
                  className="w-10 h-10 rounded-md"
                />
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                  photo_2024_1.jpg
                </span>
              </div>
              <MdDownloading className="w-5 h-5 text-gray-500 dark:text-gray-400 rounded-full cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
              <div className="photoDetail flex items-center gap-5">
                <Image
                  src={image2}
                  alt="shared-photo"
                  className="w-10 h-10 rounded-md"
                />
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                  photo_2024_2.jpg
                </span>
              </div>
              <MdDownloading className="w-5 h-5 text-gray-500 dark:text-gray-400 rounded-full cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
              <div className="photoDetail flex items-center gap-5">
                <Image
                  src={image3}
                  alt="shared-photo"
                  className="w-10 h-10 rounded-md"
                />
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                  photo_2024_3.jpg
                </span>
              </div>
              <MdDownloading className="w-5 h-5 text-gray-500 dark:text-gray-400 rounded-full cursor-pointer" />
            </div>
            <div className="flex items-center justify-between">
              <div className="photoDetail flex items-center gap-5 ">
                <Image
                  src={image4}
                  alt="shared-photo"
                  className="w-10 h-10 rounded-md"
                />
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                  photo_2024_4.jpg
                </span>
              </div>
              <MdDownloading className="w-5 h-5 text-gray-500 dark:text-gray-400 rounded-full cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm">Arquivos compartilhados</span>
            <div className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full inline-flex self-center text-sm p-2 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
              <IoChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Excluir conversa
        </button>
      </div>
    </div>
  );
};

export default Detail;
