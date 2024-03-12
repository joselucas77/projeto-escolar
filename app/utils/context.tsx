"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Context, ITEMS } from "./taskData";
import { Persons, Person } from "./studantsData";

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
    setToast(true);
  };

  const closeToast = () => {
    setToast(false);
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
