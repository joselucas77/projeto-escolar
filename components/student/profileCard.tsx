import React from "react";
import Image from "next/image";
import img from "../../public/profile.jpg";
import StatusTd from "../students/statusTd";
import { Status } from "@/api/datas/studantsData";

const ProfileCard = ({
  name,
  surname,
  status,
}: {
  name: string;
  surname: string;
  status: Status;
}) => {
  return (
    <div className="flex flex-col items-center py-2">
      <Image
        className="w-24 h-24 mb-3 rounded-lg shadow-lg"
        src={img}
        width={96}
        height={96}
        alt="image"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {name} {surname}
      </h5>
      <StatusTd status={status} />
      <div className="flex mt-4">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add friend
        </a>
        <a
          href="#"
          className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Message
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
