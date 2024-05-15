"use client";
import React from "react";
import { Header } from "./content-chat/header";
import { Main } from "./content-chat/main";
import { Footer } from "./content-chat/footer";

const ChatContent = () => {
  return (
    <div
      className={`flex flex-col basis-3/4 border-l border-solid p-1 border-gray-300 dark:border-gray-900 h-full`}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default ChatContent;
