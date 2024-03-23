import {
  IoChatbubblesOutline,
  IoClipboardOutline,
  IoHomeOutline,
  IoPeopleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const navItems = [
  {
    icon: <IoHomeOutline className="z-10" />,
    title: "Home",
    path: "/",
  },
  {
    icon: <IoPeopleOutline className="z-10" />,
    title: "Alunos",
    path: "/students",
  },
  {
    icon: <IoClipboardOutline className="z-10" />,
    title: "Tarefas",
    path: "/tasks",
  },
  {
    icon: <IoChatbubblesOutline className="z-10" />,
    title: "Chat",
    path: "/chat",
  },
  {
    icon: <IoSettingsOutline className="z-10" />,
    title: "Configurações",
    path: "/settings",
  },
];
