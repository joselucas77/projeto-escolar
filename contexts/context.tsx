"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Persons } from "@/api/datas/studants";
import { Context } from "@/api/datas/task";
import PopUp from "@/components/modal/pop-up";
import { AppContextType } from "@/types/app-context";
import { Toast } from "@/types/toast";
import FormModal from "@/components/tasks/form";
import { ChatItems, ProfileItems } from "@/api/datas/chat";
import { EmojiClickData, Theme } from "emoji-picker-react";
import AddNewChat from "@/components/chat/add-chat/form";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  // Navbar
  const [navbarActive, setNavbarActive] = useState(false);
  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  // Details from Chat
  const [detailsActive, setDetailsActive] = useState(false);
  const toggleChatDetails = () => {
    setDetailsActive(!detailsActive);
  };

  // Modal
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openFormModal = () => {
    openModal();
    setModalContent(<FormModal titleForm="Adicionar Tarefa" />);
  };

  const openForm = () => {
    openModal();
    setModalContent(<AddNewChat />);
  };

  const openPopUpModal = () => {
    openModal();
    setModalContent(<PopUp />);
  };

  const handleDelete = () => {
    closeModal();
    handleShowNotification("Tarefa Deletada!", "success");
  };

  const handleUpdate = () => {
    closeModal();
    handleShowNotification("Tarefa Alterada!", "success");
  };

  const handleCraete = () => {
    closeModal();
    handleShowNotification("Tarefa Criada!", "success");
  };

  // Toast
  const [successQueue, setSuccessQueue] = useState<Toast[]>([]);
  const [alertQueue, setAlertQueue] = useState<Toast[]>([]);
  const [currentToast, setCurrentToast] = useState<Toast | null>(null);
  const [toastQueue, setToastQueue] = useState<Toast[]>([]);
  const [alertToast, setAlertToast] = useState(false);
  const audioEnterNotification = new Audio("/notification-enter.mp3");

  const handleShowNotification = (text: string, type: "success" | "alert") => {
    const newToast: Toast = {
      id: Date.now(),
      show: true,
      removing: false,
      description: text,
      type,
    };

    if (currentToast && currentToast.type !== type) {
      handleRemoveToast(currentToast.id, currentToast.type, true);
    }

    if (type === "success") {
      setSuccessQueue([newToast, ...successQueue]);
    } else {
      setAlertQueue([newToast, ...alertQueue]);
    }

    audioEnterNotification.play();
  };

  const handleRemoveToast = (
    id: number,
    type: "success" | "alert",
    removeAll: boolean = false
  ) => {
    if (removeAll) {
      setCurrentToast((prevToast) =>
        prevToast ? { ...prevToast, removing: true } : null
      );
      setTimeout(() => {
        setCurrentToast(null);
        if (type === "success") {
          setSuccessQueue([]);
        } else {
          setAlertQueue([]);
        }
      }, 700);
    } else if (currentToast?.id === id) {
      setCurrentToast((prevToast) =>
        prevToast && prevToast.id === id
          ? { ...prevToast, removing: true }
          : prevToast
      );
      setTimeout(() => {
        setCurrentToast(null);
        if (type === "success") {
          setSuccessQueue((prevQueue) => prevQueue.slice(1));
        } else {
          setAlertQueue((prevQueue) => prevQueue.slice(1));
        }
      }, 700);
    }
  };

  // Pagination global states
  const [searchStudent, setSearchStudent] = useState("");
  const [searchTask, setSearchTask] = useState("");
  const [searchChat, setSearchChat] = useState("");
  const [searchProfile, setSearchProfile] = useState("");
  const [canGoBack, setCanGoBack] = useState(true);
  const [canGoForward, setCanGoForward] = useState(true);

  //filter chat
  const chat = ProfileItems.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchChat.toLowerCase()) ||
      chat.mensage.toLowerCase().includes(searchChat.toLowerCase())
  );

  const newChat = ChatItems.filter((chat) =>
    chat.name.toLowerCase().includes(searchProfile.toLowerCase())
  );

  // const [alertToast, setAlertToast] = useState(false);

  const addChat = (index: number) => {
    const chatToAdd = newChat[index];
    if (!ProfileItems.some((item) => item.profile === chatToAdd.profile)) {
      setAlertToast(false);
      ProfileItems.push(chatToAdd);
      handleShowNotification("Perfil adicionado!", "success");
    } else {
      setAlertToast(true);
      handleShowNotification("Já foi adicionado!", "alert");
    }
  };

  // Pagination studants table
  const [currentPagePersons, setCurrentPagePersons] = useState(1);
  const studentsPerPage = 10;
  const [filterOption, setFilterOption] = useState("all");

  // Função para filtrar pessoas com base na opção selecionada e no termo de pesquisa
  const persons = Persons.filter((person) => {
    const fullName = `${person.name} ${person.surname}`.toLowerCase();
    const age = person.age.toString().toLowerCase();
    const search = searchStudent.toLowerCase();

    if (filterOption === "all") {
      return (
        fullName.includes(search) ||
        age.includes(search) ||
        person.sex.toLowerCase().includes(search) ||
        person.status.toLowerCase().includes(search)
      );
    } else if (filterOption === "mas") {
      return (
        (person.sex.toLowerCase() === "masculino" &&
          fullName.includes(search)) ||
        (person.sex.toLowerCase() === "masculino" && age.includes(search))
      );
    } else if (filterOption === "fem") {
      return (
        (person.sex.toLowerCase() === "feminino" &&
          fullName.includes(search)) ||
        (person.sex.toLowerCase() === "feminino" && age.includes(search))
      );
    } else if (filterOption === "apr") {
      return (
        (person.status.toLowerCase() === "aprovado" &&
          fullName.includes(search)) ||
        (person.status.toLowerCase() === "aprovado" && age.includes(search))
      );
    } else if (filterOption === "pen") {
      return (
        (person.status.toLowerCase() === "pendente" &&
          fullName.includes(search)) ||
        (person.status.toLowerCase() === "pendente" && age.includes(search))
      );
    } else if (filterOption === "rep") {
      return (
        (person.status.toLowerCase() === "reprovado" &&
          fullName.includes(search)) ||
        (person.status.toLowerCase() === "reprovado" && age.includes(search))
      );
    }
  });

  const indexOfLastPerson = currentPagePersons * studentsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - studentsPerPage;
  const currentPersons = persons.slice(indexOfFirstPerson, indexOfLastPerson);
  const totalPersonsPages = Math.ceil(persons.length / studentsPerPage);

  const handlePersonsPageChange = (pageNumber: number) => {
    setCurrentPagePersons(pageNumber);
  };

  const handleBackClickTable = () => {
    if (!canGoBack) return;
    handlePersonsPageChange(currentPagePersons - 1);
  };

  const handleForwardClickTable = () => {
    if (!canGoForward) return;
    handlePersonsPageChange(currentPagePersons + 1);
  };

  // Pagination task table
  const [currentPageItems, setCurrentPageItems] = useState(1);
  const tasksPerPage = 6;

  const items = Context.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTask.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTask.toLowerCase()) ||
      item.date.toLowerCase().includes(searchTask.toLowerCase())
  );

  const indexOfLastItem = currentPageItems * tasksPerPage;
  const indexOfFirstItem = indexOfLastItem - tasksPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalItemsPages = Math.ceil(items.length / tasksPerPage);

  const handleItemsPageChange = (pageNumber: number) => {
    setCurrentPageItems(pageNumber);
  };

  const handleBackClickTask = () => {
    if (!canGoBack) return;
    handleItemsPageChange(currentPageItems - 1);
  };

  const handleForwardClickTask = () => {
    if (!canGoForward) return;
    handleItemsPageChange(currentPageItems + 1);
  };

  // Login Page
  const [addClass, setAddClass] = useState(false);

  const changeMode = () => {
    setAddClass(!addClass);
  };

  // Task completed
  const handleTaskCompleted = () => {
    handleShowNotification("Tarefa Concluida!", "success");
  };

  // Check your email
  const handleSendEmail = () => {
    handleShowNotification("Verifique o email!", "alert");
  };

  // Now log in
  const handleRegisterUser = () => {
    handleShowNotification("Agora faça login!", "alert");
  };

  // Set to date on Card the Task
  const formatDate = (date: string): string => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  // Settings for input to chat component
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [theme, setTheme] = useState(Theme.LIGHT);
  const [addMode, setAddMode] = useState(false);

  const handleEmoji = (e: EmojiClickData) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        navbarActive,
        toggleNavbar,
        modal,
        openModal,
        closeModal,
        currentPageItems,
        currentPagePersons,
        handleItemsPageChange,
        handlePersonsPageChange,
        studentsPerPage,
        tasksPerPage,
        items,
        currentItems,
        persons,
        currentPersons,
        modalContent,
        openPopUpModal,
        setModalContent,
        setCanGoBack,
        setCanGoForward,
        totalItemsPages,
        totalPersonsPages,
        canGoBack,
        canGoForward,
        handleBackClickTable,
        handleBackClickTask,
        handleForwardClickTable,
        handleForwardClickTask,
        formatDate,
        handleDelete,
        handleUpdate,
        handleCraete,
        handleTaskCompleted,
        handleSendEmail,
        handleRegisterUser,
        // toasts,
        handleShowNotification,
        handleRemoveToast,
        openFormModal,
        changeMode,
        addClass,
        // setToasts,
        chat,
        newChat,
        open,
        setOpen,
        text,
        setText,
        theme,
        setTheme,
        handleEmoji,
        addMode,
        setAddMode,
        searchChat,
        setSearchChat,
        searchStudent,
        setSearchStudent,
        searchTask,
        setSearchTask,
        openForm,
        filterOption,
        setFilterOption,
        detailsActive,
        setDetailsActive,
        toggleChatDetails,
        searchProfile,
        setSearchProfile,
        addChat,
        alertToast: currentToast?.type === "alert",
        setAlertToast,
        toastQueue,
        currentToast,
        queueLength: toastQueue.length,
        setCurrentToast,
        successQueue,
        setToastQueue,
        alertQueue,
        alertQueueLength: alertQueue.length,
        successQueueLength: successQueue.length,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext deve ser usado dentro de um AppProvider");
  }
  return context;
};
