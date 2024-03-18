"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Context, ITEMS } from "../datas/taskData";
import { Persons, Person } from "../datas/studantsData";
import Form from "@/app/components/tasks/modal/form";
import PopUp from "@/app/components/modal/pop-up";

interface AppContextType {
  navbarActive: boolean;
  modal: boolean;
  toast: boolean;
  currentPage: number;
  itemsPerPage: number;
  search: string;
  items: ITEMS[];
  persons: Person[];
  currentItems: ITEMS[];
  currentPersons: Person[];
  handlePageChange: (pageNumber: number) => void;
  setSearch: Dispatch<SetStateAction<string>>;
  modalContent: React.ReactNode;
  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  openFormModal: () => void;
  openPopUpModal: () => void;
  toggleNavbar: () => void;
  openModal: () => void;
  closeModal: () => void;
  openToast: () => void;
  closeToast: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const itemsPerPage = 8;

  const items = Context.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.text.toLowerCase().includes(search.toLowerCase()) ||
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const currentPersons = persons.slice(indexOfFirstItem, indexOfLastItem);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const openToast = () => {
    closeModal();
    setToast(true);
  };

  const closeToast = () => {
    setToast(false);
  };

  const openFormModal = () => {
    openModal();
    setModalContent(<Form />);
  };

  const openPopUpModal = () => {
    openModal();
    setModalContent(<PopUp />);
  };

  return (
    <AppContext.Provider
      value={{
        navbarActive,
        toggleNavbar,
        modal,
        openModal,
        closeModal,
        currentPage,
        handlePageChange,
        itemsPerPage,
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
        openFormModal,
        openPopUpModal,
        setModalContent,
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
