import React from "react";
import Pagination from "./pagination";
import Table from "./table";
import { useAppContext } from "../../utils/context";
import SearchInput from "./searchInput";

function StudentsIndex() {
  const {
    currentPage,
    items,
    itemsPerPage,
    handlePageChange,
    search,
    setSearch,
  } = useAppContext();
  return (
    <div className="relative">
      <SearchInput search={search} setSearch={setSearch} />
      <Table />
      <Pagination
        currentPage={currentPage}
        totalItems={items.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default StudentsIndex;
