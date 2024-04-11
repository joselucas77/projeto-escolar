import { Person } from "@/api/datas/studants";
import { Task } from "@/api/datas/task";
import { Dispatch, SetStateAction } from "react";
import { Toast } from "./toat";

export interface AppContextType {
  navbarActive: boolean;
  modal: boolean;
  canGoBack: boolean;
  canGoForward: boolean;
  isOpen: boolean;
  addClass: boolean;
  toastVisible: boolean;
  currentPageItems: number;
  currentPagePersons: number;
  studentsPerPage: number;
  tasksPerPage: number;
  totalItemsPages: number;
  totalPersonsPages: number;
  search: string;
  items: Task[];
  persons: Person[];
  currentItems: Task[];
  currentPersons: Person[];
  toasts: Toast[];
  setSearch: Dispatch<SetStateAction<string>>;
  setAddClass: React.Dispatch<React.SetStateAction<boolean>>;
  setCanGoBack: React.Dispatch<React.SetStateAction<boolean>>;
  setCanGoForward: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setToastVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent: React.ReactNode;
  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  handleItemsPageChange: (pageNumber: number) => void;
  handlePersonsPageChange: (pageNumber: number) => void;
  openPopUpModal: () => void;
  toggleNavbar: () => void;
  openModal: () => void;
  closeModal: () => void;
  openToast: () => void;
  closeToast: () => void;
  toggleDropdown: () => void;
  changeMode: () => void;
  handleBackClickTable: () => void;
  handleForwardClickTable: () => void;
  handleBackClickTask: () => void;
  handleForwardClickTask: () => void;
  handleDelete: () => void;
  handleUpdate: () => void;
  handleCraete: () => void;
  handleTaskCompleted: () => void;
  handleSendEmail: () => void;
  handleRegisterUser: () => void;
  toggleToast: () => void;
  handleShowNotification: (text: string) => void;
  handleRemoveToast: (id: number) => void;
  formatDate: (date: string) => string;
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}
