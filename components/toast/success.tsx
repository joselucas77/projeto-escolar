"use client";
import { useEffect } from "react";
import { useAppContext } from "@/contexts/context";

const SuccessToast = () => {
  const {
    currentToast,
    handleRemoveToast,
    toastQueue,
    setCurrentToast,
    successQueue,
    alertQueue,
    alertQueueLength,
    successQueueLength,
  } = useAppContext();

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    if (!currentToast) {
      if (alertQueue.length > 0) {
        const nextToast = alertQueue[0];
        setCurrentToast(nextToast);
        const timeoutId = setTimeout(() => {
          handleRemoveToast(nextToast.id, "alert");
          setCurrentToast(null);
        }, 5000);
        nextToast.timeoutId = timeoutId;
        timeouts.push(timeoutId);
      } else if (successQueue.length > 0) {
        const nextToast = successQueue[0];
        setCurrentToast(nextToast);
        const timeoutId = setTimeout(() => {
          handleRemoveToast(nextToast.id, "success");
          setCurrentToast(null);
        }, 5000);
        nextToast.timeoutId = timeoutId;
        timeouts.push(timeoutId);
      }
    }

    return () => {
      timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [
    toastQueue,
    currentToast,
    handleRemoveToast,
    setCurrentToast,
    alertQueue,
    successQueue,
  ]);

  return (
    <section className="absolute top-0 right-[-50%] left-[-50%] p-4 z-0">
      {currentToast && (
        <dialog
          open
          key={currentToast.id}
          id={`notification-${currentToast.id}`}
          className={`relative z-10 ${
            currentToast.type === "alert"
              ? "bg-orange-600 dark:bg-orange-950"
              : "bg-blue-600 dark:bg-blue-950"
          } text-white flex items-center w-80 gap-4 p-0 open:p-4 mt-0 open:mt-4 shadow-lg rounded-3xl transition-all duration-700 ${
            currentToast.removing
              ? "open:translate-y-0 -translate-y-72 opacity-0"
              : "animate-notification open:max-h-20 max-h-0 open:opacity-100"
          }`}
        >
          <section className="flex items-center gap-4">
            {currentToast.type === "alert" ? (
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
                {currentToast.description}
              </p>
            </div>
          </section>
          <div
            className={`${
              currentToast.type === "alert"
                ? "bg-orange-500 dark:bg-orange-900"
                : "bg-blue-500 dark:bg-blue-900"
            } w-[1px] h-8`}
          ></div>
          <form method="dialog">
            <button
              className="text-green-300 text-base font-semibold"
              onClick={() =>
                handleRemoveToast(currentToast.id, currentToast.type, true)
              }
            >
              Fechar
            </button>
          </form>
          {currentToast.type === "alert" && alertQueueLength > 1 && (
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-800">
              {alertQueueLength - 1}
            </div>
          )}
          {currentToast.type === "success" && successQueueLength > 1 && (
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-800">
              {successQueueLength - 1}
            </div>
          )}
        </dialog>
      )}
    </section>
  );
};

export default SuccessToast;
