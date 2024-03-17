import React from "react";

const ScoreCard = () => {
  return (
    <div>
      <div className="flex items-center mb-5">
        <p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
          8.7
        </p>
        <p className="ms-2 font-medium text-gray-900 dark:text-white">
          Exelente
        </p>
        <a
          href="#"
          className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Entenda as métricas
        </a>
      </div>
      <div className="gap-8 sm:grid sm:grid-cols-2">
        <div>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Frequência
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-4/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.8
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Participação
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-10/12"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.9
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Apresentação
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-3/6"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.8
              </span>
            </dd>
          </dl>
        </div>
        <div>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Reputação
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-3/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.9
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Educação
            </dt>
            <dd className="flex items-center mb-3">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                7.0
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Acertividade
            </dt>
            <dd className="flex items-center">
              <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500 w-1/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8.9
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
