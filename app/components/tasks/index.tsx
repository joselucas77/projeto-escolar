import React, { useState } from "react";
import SearchInput from "./taskMain/searchInput";
import Tasks from "./tasksItems/tasks";
import { useAppContext } from "../../utils/context";
import Pagination from "./taskMain/pagination";

function TasksIndex() {
  const {
    search,
    setSearch,
    currentPage,
    items,
    itemsPerPage,
    handlePageChange,
  } = useAppContext();
  return (
    <div className="relative w-full h-full grid overflow-x-auto">
      <div className="w-full h-full overflow-y-auto">
        <div className="flex relative font-extrabold after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-gray-400 dark:after:bg-gray-900 after:rounded-lg">
          <h1 className="text-2xl">Todas as Tarefas</h1>
        </div>
        <div className="flex">
          <SearchInput search={search} setSearch={setSearch} />
          <Pagination
            currentPage={currentPage}
            totalItems={items.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
        <div className="grid gap-y-6 my-4 mx-4 grid-cols-4">
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default TasksIndex;
