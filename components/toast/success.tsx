"use client";
import { useEffect } from "react";
import { useAppContext } from "@/contexts/context";
import { ProfileItems } from "@/api/datas/chat";

const SuccessToast = () => {
  const { toasts, handleRemoveToast, alertToast } = useAppContext();

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    toasts.forEach((toast) => {
      if (toast.show && toast.removing) {
        // Garante que a animação não seja aplicada à notificação sendo removida
        const timeoutId = setTimeout(() => {
          handleRemoveToast(toast.id);
        }, 5000);
        timeouts.push(timeoutId);
      }
    });

    return () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [toasts, handleRemoveToast]);

  return (
    <section className="absolute top-0 right-[-50%] left-[-50%] p-4 z-10">
      {toasts.map(
        (toast) =>
          toast.show && (
            <dialog
              open
              key={toast.id}
              id={`notification-${toast.id}`}
              className={`relative ${
                alertToast
                  ? "bg-orange-600 dark:bg-orange-950"
                  : "bg-blue-600 dark:bg-blue-950"
              }  text-white flex items-center w-80 gap-4 p-0 open:p-4 mt-0 open:mt-4 shadow-lg rounded-3xl transition-all duration-700 overflow-hidden ${
                toast.removing
                  ? "open:translate-y-0 -translate-y-72 opacity-0"
                  : "animate-notification open:max-h-20 max-h-0  open:opacity-100"
              } `}
            >
              <section className="flex items-center gap-4">
                {alertToast ? (
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                )}

                <div className="w-36">
                  <p className="text-ellipsis overflow-hidden text-base line-clamp-1">
                    {toast.description}
                  </p>
                </div>
              </section>
              <div
                className={`${
                  alertToast
                    ? "bg-orange-500 dark:bg-orange-900"
                    : "bg-blue-500 dark:bg-blue-900"
                } w-[1px] h-8`}
              ></div>
              <form method="dialog">
                <button
                  className="text-green-300 text-base font-semibold"
                  onClick={() => handleRemoveToast(toast.id)}
                >
                  Fechar
                </button>
              </form>
            </dialog>
          )
      )}
    </section>
  );
};

export default SuccessToast;
