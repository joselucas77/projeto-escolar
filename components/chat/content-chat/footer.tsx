"use client";
import React, { useEffect, useState } from "react";
import { IoImage, IoDocument, IoSendSharp } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import EmojiPicker, { Theme, EmojiClickData } from "emoji-picker-react";
import { useAppContext } from "@/contexts/context";

export const Footer = () => {
  const { open, setOpen, text, setText, theme, setTheme, handleEmoji } =
    useAppContext();

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme === "dark") {
      setTheme(Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
    }
  }, [setTheme]);

  const previewConfig = {
    defaultEmoji: "",
    defaultCaption: "",
    showPreview: false,
  };
  return (
    <div className="flex items-center justify-between pt-5 px-5 mt-auto gap-2 border-t border-solid border-gray-300 dark:border-gray-900">
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center gap-2 ps-3 cursor-pointer">
          <MdEmojiEmotions
            className="w-6 h-6 text-gray-500 dark:text-gray-400"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="absolute bottom-16 left-0 z-50">
          <EmojiPicker
            height={300}
            width={400}
            open={open}
            theme={theme}
            previewConfig={previewConfig}
            onEmojiClick={handleEmoji}
          />
        </div>
        <input
          type="text"
          id="search"
          className="block w-full p-4 ps-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Mensagem"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex absolute end-2.5 gap-2 bottom-2 px-4 py-2">
          <IoDocument className="w-6 h-6 text-gray-500 dark:text-gray-400 cursor-pointer" />
          <IoImage className="w-6 h-6 text-gray-500 dark:text-gray-400 cursor-pointer" />
        </div>
      </div>
      <button className="bg-gray-100 rounded-full p-4 shadow-inner border-2 border-solid border-gray-50 dark:border-gray-600 dark:bg-gray-700">
        <IoSendSharp />
      </button>
    </div>
  );
};
