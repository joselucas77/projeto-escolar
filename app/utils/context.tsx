"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  navbarActive: boolean;
  modal: boolean;
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

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <AppContext.Provider
      value={{ navbarActive, toggleNavbar, modal, openModal, closeModal }}
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
