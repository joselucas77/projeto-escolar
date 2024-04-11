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
import FormModal from "@/components/tasks/form";
import { AppContextType } from "@/types/app-context";
import { Toast } from "@/types/toat";

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

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const [currentPageItems, setCurrentPageItems] = useState(1);
  const [currentPagePersons, setCurrentPagePersons] = useState(1);
  const [search, setSearch] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [canGoBack, setCanGoBack] = useState(true);
  const [canGoForward, setCanGoForward] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [addClass, setAddClass] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const studentsPerPage = 8;
  const tasksPerPage = 6;

  const items = Context.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.date.toLowerCase().includes(search.toLowerCase())
  );

  const persons = Persons.filter(
    (person) =>
      person.name.toLowerCase().includes(search.toLowerCase()) ||
      person.surname.toLowerCase().includes(search.toLowerCase()) ||
      person.age.toLowerCase().includes(search.toLowerCase()) ||
      person.sex.toLowerCase().includes(search.toLowerCase()) ||
      person.status.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPageItems * tasksPerPage;
  const indexOfFirstItem = indexOfLastItem - tasksPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalItemsPages = Math.ceil(items.length / tasksPerPage);

  const indexOfLastPerson = currentPagePersons * studentsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - studentsPerPage;
  const currentPersons = persons.slice(indexOfFirstPerson, indexOfLastPerson);
  const totalPersonsPages = Math.ceil(persons.length / studentsPerPage);

  const handleBackClickTable = () => {
    if (!canGoBack) return;
    handlePersonsPageChange(currentPagePersons - 1);
  };

  const handleForwardClickTable = () => {
    if (!canGoForward) return;
    handlePersonsPageChange(currentPagePersons + 1);
  };

  const handleBackClickTask = () => {
    if (!canGoBack) return;
    handleItemsPageChange(currentPageItems - 1);
  };

  const handleForwardClickTask = () => {
    if (!canGoForward) return;
    handleItemsPageChange(currentPageItems + 1);
  };

  const handleItemsPageChange = (pageNumber: number) => {
    setCurrentPageItems(pageNumber);
  };

  const handlePersonsPageChange = (pageNumber: number) => {
    setCurrentPagePersons(pageNumber);
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

  const handleTaskCompleted = () => {
    handleShowNotification("Tarefa Concluida!");
  };

  const handleSendEmail = () => {
    closeModal();
    handleShowNotification("Verifique seu email!");
  };

  const handleRegisterUser = () => {
    closeModal();
    handleShowNotification("Agora faça login!");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeMode = () => {
    setAddClass(!addClass);
  };

  const formatDate = (date: string): string => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  const toggleToast = () => {
    setToastVisible(!toastVisible);
  };

  const openToast = () => {
    setToastVisible(true);
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  const [toasts, setToasts] = useState<Toast[]>([]);
  const audioEnterNotification = useRef(new Audio("/notification-enter.mp3"));

  const handleRemoveToast = (id: number) => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) => {
        if (toast.id === id) {
          if (toast.timeoutId) clearTimeout(toast.timeoutId);
        }
        return toast;
      })
    );

    // Aguarda 1 segundo antes de remover o Toast da lista
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
    }, 1000);
  };

  const handleShowNotification = (text: string) => {
    if (toasts.length < 3) {
      const newToast: Toast = {
        id: Date.now(),
        show: true,
        description: text,
        timeoutId: null, // Inicializa o temporizador como null
      };

      // Adiciona um novo Toast à lista
      setToasts([...toasts, newToast]);
      audioEnterNotification.current.play();

      // Inicia um temporizador para esse Toast específico
      newToast.timeoutId = setTimeout(() => {
        handleRemoveToast(newToast.id); // Remove o Toast após 5 segundos
      }, 5000);
    }
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
        openToast,
        closeToast,
        modalContent,
        openPopUpModal,
        setModalContent,
        setCanGoBack,
        setCanGoForward,
        totalItemsPages,
        totalPersonsPages,
        canGoBack,
        canGoForward,
        isOpen,
        setIsOpen,
        toggleDropdown,
        addClass,
        setAddClass,
        changeMode,
        theme,
        setTheme,
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
        toastVisible,
        setToastVisible,
        toggleToast,
        toasts,
        handleShowNotification,
        handleRemoveToast,
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
