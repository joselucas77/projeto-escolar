import Link from "next/link";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

function SignOutLink() {
  return (
    <>
      <Link
        href={"#"}
        className="relative flex whitespace-nowrap hover:text-white dark:text-white dark:hover:text-black"
      >
        <div className="relative flex items-center justify-center min-w-16 h-16 text-[1.5em] duration-500">
          <IoLogOutOutline />
        </div>
        <div className="relative flex h-16 text-[1em] items-center pl-2 uppercase tracking-wider duration-500">
          Sair
        </div>
      </Link>
    </>
  );
}

export default SignOutLink;
