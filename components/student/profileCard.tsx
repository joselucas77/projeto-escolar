import React from "react";
import Image from "next/image";
import img from "../../public/profile.jpg";
import StatusTd from "../students/status";
import { Status } from "@/api/datas/studants";
// import Link from "next/link";

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
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
      <Image
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={img}
        alt="profile"
      ></Image>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name} {surname}
        </h5>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <StatusTd status={status} />
        </div>
      </div>
    </div>

    // <div className="grid grid-cols-2 gap-2 p-5">
    //   <div className="w-32 h-52 rounded-lg shadow-2xl bg-no-repeat bg-cover bg-center bg-[url('/profile.jpg')]"></div>
    //   <div className="grid grid-rows-3 grid-flow-col gap-4">
    //     <h5 className="text-xl font-medium text-gray-900 dark:text-white">
    //       {name} {surname}
    //     </h5>
    //     <StatusTd status={status} />
    //     <Link
    //       href="#"
    //       className="p-5 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    //     >
    //       Message
    //     </Link>
    //   </div>
    // </div>
  );
};

export default ProfileCard;
