"use client";
import Modal from "@/components/modal/modal";
import AddTask from "@/components/tasks/add-task";
import Pagination from "@/components/tasks/pagination";
import SearchTask from "@/components/tasks/search";
import CardTasks from "@/components/tasks/card";
import { useAppContext } from "@/contexts/context";

const Tasks = () => {
  const { navbarActive, modal, modalContent } = useAppContext();
  return (
    <section
      className={`absolute h-screen px-3 py-3 bg-gray-300 dark:bg-gray-900 duration-500 animate-mainContainer ${
        navbarActive
          ? "w-[calc(100%-240px)] left-60"
          : "w-[calc(100%-80px)] left-20"
      }`}
    >
      <main className="bg-white relative w-full h-full rounded-lg p-5 flex text-gray-900 dark:text-white dark:bg-gray-800">
        {modal && <Modal content={modalContent} />}
        <div className="relative w-full h-full grid overflow-x-auto">
          <div className="w-full h-full overflow-y-auto">
            <div className="flex relative font-extrabold after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-gray-300 dark:after:bg-gray-900 after:rounded-lg">
              <h1 className="text-2xl">Todas as Tarefas</h1>
            </div>
            <div className="flex">
              <AddTask />
              <SearchTask />
              <Pagination />
            </div>
            <CardTasks />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Tasks;
