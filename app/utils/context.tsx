"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Context, ITEMS } from "./data";

interface AppContextType {
  navbarActive: boolean;
  modal: boolean;
  currentPage: number;
  itemsPerPage: number;
  search: string;
  items: ITEMS[];
  currentItems: ITEMS[];
  handlePageChange: (pageNumber: number) => void;
  setSearch: Dispatch<SetStateAction<string>>;
  toggleNavbar: () => void;
  openModal: () => void;
  closeModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const itemsPerPage = 8;

  const items = Context.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

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
