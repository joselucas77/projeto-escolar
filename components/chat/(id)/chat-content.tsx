"use client";
import { getChatById } from "@/api/datas/chat";
import Chat from "./chat";
import { Footer } from "./content-chat/footer";
import { Header } from "./content-chat/header";
import { Main } from "./content-chat/main";

interface ChatProps {
  params: { id: string };
}

const ChatContent = ({ params }: ChatProps) => {
  const chat = parseInt(params.id);

  const message = getChatById(chat);

  if (!message) {
    return <div>Aluno não encontrado com o ID {chat}</div>;
  }
  return (
    <div
      className={`flex flex-col basis-3/4 border-l border-solid p-1 border-gray-300 dark:border-gray-900 h-full`}
    >
      <Header name={message.name} profile={message.profile} />
      <Main profile={message.profile} />
      <Footer />
    </div>
  );
};

export default ChatContent;
