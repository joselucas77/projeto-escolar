"use client";
import { useEffect, useState } from "react";
import UserInfo from "./list/user-info";
import ChatList from "./list/chat-list";
import { useAppContext } from "@/contexts/context";

const List = () => {
  const { detailsActive, chatHome, setChatHome } = useAppContext();

  useEffect(() => {
    const location = window.location.pathname;

    if (/^\/chat\/.*/.test(location)) {
      setChatHome(false);
    } else {
      setChatHome(true);
    }
  }, [setChatHome]);
  return (
    <div
      className={`${
        detailsActive
          ? "hidden"
          : `flex flex-col ${chatHome ? "w-full" : "basis-1/4"}  px-5`
      }`}
    >
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
