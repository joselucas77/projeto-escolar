import React from "react";
import Pagination from "./pagination";
import Table from "./table";
import { useAppContext } from "../../api/utils/context";
import SearchInput from "./searchInput";
import DownloadTable from "./downloadBtn";

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
    <div>
      <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <SearchInput search={search} setSearch={setSearch} />
        <DownloadTable />
      </div>
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
