"use client";
import React from "react";
import UserInfo from "./list/user-info";
import ChatList from "./list/chat-list";
import { useAppContext } from "@/contexts/context";

const List = () => {
  const { detailsActive } = useAppContext();
  return (
    <div
      className={`${detailsActive ? "hidden" : "flex flex-col basis-1/4 px-5"}`}
    >
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
