"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
} from "react";
import { Persons } from "@/api/datas/studants";
import { Context, Task } from "@/api/datas/task";
import PopUp from "@/components/modal/pop-up";
import { AppContextType } from "@/types/app-context";
import { Toast } from "@/types/toast";
import FormModal from "@/components/tasks/form";
import { ChatItems } from "@/api/datas/chat";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  // Navbar
  const [navbarActive, setNavbarActive] = useState(false);
  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
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

  const openPopUpModal = () => {
    openModal();
    setModalContent(<PopUp />);
  };

  const handleDelete = () => {
    closeModal();
    handleShowNotification("Tarefa Deletada!");
  };

  const handleUpdate = () => {
    closeModal();
    handleShowNotification("Tarefa Alterada!");
  };

  const handleCraete = () => {
    closeModal();
    handleShowNotification("Tarefa Criada!");
  };

  // Toast
  const [toasts, setToasts] = useState<Toast[]>([]);
  const audioEnterNotification = new Audio("/notification-enter.mp3");

  const handleShowNotification = (text: string) => {
    if (toasts.length < 3) {
      const newToast: Toast = {
        id: Date.now(),
        show: true,
        removing: false,
        description: text,
      };

      setToasts([newToast, ...toasts]); // Adiciona nova notificação no início
      audioEnterNotification.play();

      // Inicia o temporizador apenas para a nova notificação
      const timeoutId = setTimeout(() => {
        handleRemoveToast(newToast.id);
      }, 5000);

      // Adiciona o timeoutId à notificação para limpeza posterior
      newToast.timeoutId = timeoutId;
    }
  };

  const handleRemoveToast = (id: number) => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) => {
        if (toast.id === id) {
          return { ...toast, removing: true }; // Marca a notificação como removendo
        }
        return toast;
      })
    );

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 700); // Aguarda o término da animação antes de remover completamente a notificação
  };

  // Pagination global states
  const [search, setSearch] = useState("");
  const [canGoBack, setCanGoBack] = useState(true);
  const [canGoForward, setCanGoForward] = useState(true);

  //filter chat
  const chat = ChatItems.filter(
    (chat) =>
      chat.name.toLowerCase().includes(search.toLowerCase()) ||
      chat.mensage.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination studants table
  const [currentPagePersons, setCurrentPagePersons] = useState(1);
  const studentsPerPage = 8;

  const persons = Persons.filter(
    (person) =>
      person.name.toLowerCase().includes(search.toLowerCase()) ||
      person.surname.toLowerCase().includes(search.toLowerCase()) ||
      person.age.toLowerCase().includes(search.toLowerCase()) ||
      person.sex.toLowerCase().includes(search.toLowerCase()) ||
      person.status.toLowerCase().includes(search.toLowerCase())
  );

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
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.date.toLowerCase().includes(search.toLowerCase())
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
    handleShowNotification("Tarefa Concluida!");
  };

  // Check your email
  const handleSendEmail = () => {
    handleShowNotification("Verifique o email!");
  };

  // Now log in
  const handleRegisterUser = () => {
    handleShowNotification("Agora faça login!");
  };

  // Set to date on Card the Task
  const formatDate = (date: string): string => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
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
        search,
        setSearch,
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
        toasts,
        handleShowNotification,
        handleRemoveToast,
        openFormModal,
        changeMode,
        addClass,
        setToasts,
        chat,
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
