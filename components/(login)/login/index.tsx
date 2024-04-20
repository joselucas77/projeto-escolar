"use client";
import { useAppContext } from "@/contexts/context";
import Link from "next/link";
import { FaLock, FaEnvelope } from "react-icons/fa6";

const Login = () => {
  const { addClass } = useAppContext();
  return (
    <div
      className={`flex flex-col items-center justify-center p-[0_5rem] overflow-hidden col-[1_/_2] row-[1_/_2] duration-[.2s] delay-[.7s] ease-in-out ${
        addClass ? "opacity-0 z-[1]" : "z-[2]"
      }`}
    >
      <form className="space-y-6 w-full max-w-96 h-full" action="/">
        <h5 className="text-4xl font-medium text-gray-900 dark:text-white text-center">
          Login
        </h5>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaEnvelope className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@email.com"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <FaLock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <Link
            href="/forgot-password"
            className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Esqueçeu a senha?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
