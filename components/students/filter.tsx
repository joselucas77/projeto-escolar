import { useAppContext } from "@/contexts/context";
import React from "react";

const Filter = () => {
  const { filterOption, setFilterOption } = useAppContext();
  // Função para lidar com a mudança na opção de filtro
  const handleFilterChange = (e: any) => {
    setFilterOption(e.target.value);
  };
  return (
    <div>
      <select
        id="filter"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={filterOption}
        onChange={handleFilterChange}
      >
        <option selected value="all">
          TODOS
        </option>
        <option value="mas">MASCULINO</option>
        <option value="fem">FEMININO</option>
        <option value="apr">APROVADO</option>
        <option value="pen">PENDENTE</option>
        <option value="rep">REPROVADO</option>
      </select>
    </div>
  );
};

export default Filter;
