import React from "react";
import Pagination from "./pagination";
import Table from "./table";
import SearchInput from "./searchInput";
import DownloadTable from "./downloadBtn";
import { useAppContext } from "@/contexts/context";

function StudentsIndex() {
  const { search, setSearch } = useAppContext();
  return (
    <div>
      <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <SearchInput search={search} setSearch={setSearch} />
        <DownloadTable />
      </div>
      <Table />
      <Pagination />
    </div>
  );
}

export default StudentsIndex;
