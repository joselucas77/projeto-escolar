import React from "react";
import UserInfo from "./list/user-info";
import ChatList from "./list/chat-list";

const List = () => {
  return (
    <div className="flex flex-col basis-1/4">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
