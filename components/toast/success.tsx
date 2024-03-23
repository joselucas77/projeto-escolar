import { Zoom, toast } from "react-toastify";

export const SuccessToast = (
  theme: "dark" | "light" | "colored",
  title: string
) => {
  toast.success(title, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme,
    transition: Zoom,
  });
};
