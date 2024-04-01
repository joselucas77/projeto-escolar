"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Persons } from "@/api/datas/studants";
import { Context } from "@/api/datas/task";
import PopUp from "@/components/modal/pop-up";
import FormModal from "@/components/tasks/form";
import { AppContextType } from "@/types/app-context";
import { SuccessToast } from "@/components/toast/success";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);
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

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleItemsPageChange = (pageNumber: number) => {
    setCurrentPageItems(pageNumber);
  };

  const handlePersonsPageChange = (pageNumber: number) => {
    setCurrentPagePersons(pageNumber);
  };

  const openToast = () => {
    closeModal();
    setToast(true);
  };

  const closeToast = () => {
    setToast(false);
  };

  const openPopUpModal = () => {
    openModal();
    setModalContent(<PopUp />);
  };

  const openFormModal = () => {
    openModal();
    setModalContent(<FormModal titleForm="Adicionar Tarefa" />);
  };

  const handleDelete = () => {
    closeModal();
    SuccessToast(theme, "Tarefa deletada!");
  };

  const handleUpdate = () => {
    closeModal();
    SuccessToast(theme, "Tarefa Alterada!");
  };

  const handleCraete = () => {
    closeModal();
    SuccessToast(theme, "Tarefa Criada!");
  };

  const handleTaskCompleted = () => {
    closeModal();
    SuccessToast(theme, "Tarefa Concluida!");
  };

  const handleSendEmail = () => {
    closeModal();
    SuccessToast("dark", "Verifique seu email!");
  };

  const handleRegisterUser = () => {
    closeModal();
    SuccessToast("dark", "Agora faça login!");
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
        toast,
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
        openFormModal,
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
