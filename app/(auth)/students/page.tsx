"use client";
import { useAppContext } from "@/contexts/context";
import DownloadTable from "@/components/students/download-table";
import Pagination from "@/components/students/pagination";
import SearchStudent from "@/components/students/search";
import Table from "@/components/students/table";

export default function Students() {
  const { navbarActive, search, setSearch } = useAppContext();
  return (
    <section
      className={`absolute h-screen px-3 py-3 bg-gray-300 dark:bg-gray-900 duration-500 ${
        navbarActive
          ? "w-[calc(100%-240px)] left-60"
          : "w-[calc(100%-80px)] left-20"
      }`}
    >
      <main className="bg-white relative w-full h-full rounded-lg p-5 text-gray-900 dark:text-white dark:bg-gray-800">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <SearchStudent />
          <DownloadTable />
        </div>
        <Table />
        <Pagination />
      </main>
    </section>
  );
}
