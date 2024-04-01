"use client";
import Image from "next/image";
import logo from "../../../public/log.svg";
import register from "../../../public/register.svg";
import { useAppContext } from "@/contexts/context";

const Panel = () => {
  const { addClass, changeMode } = useAppContext();
  return (
    <div className="absolute top-0 left-0 grid w-full h-full grid-cols-2">
      <div
        className={`flex flex-col items-end justify-around text-center p-[3rem_17%_2rem_12%] z-[6] ${
          addClass ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <div
          className={`text-white duration-[.9s] delay-[.6s] ease-in-out ${
            addClass ? "-translate-x-[800px]" : ""
          }`}
        >
          <h3 className="font-semibold leading-none text-[1.5rem]">
            Novo por aqui ?
          </h3>
          <p className="text-[0.95rem] p-[0.7rem_0]">
            Crie sua conta agora mesmo e experimente todos os benefícios dessa
            plataforma escolar incrível!
          </p>
          <button
            className="w-[130px] h-[41px] m-0 bg-transparent border-2 border-solid border-white outline-none rounded-[49px] cursor-pointer text-white uppercase text-[0.8rem] font-semibold shadow-[0_7px_25px__rgba(0,0,0,0.2)] duration-500 hover:bg-white hover:text-blue-500"
            onClick={changeMode}
          >
            Registre-se
          </button>
        </div>
        <Image
          src={logo}
          className={`w-full duration-[1.1s] delay-[.4s] ease-in-out ${
            addClass ? "-translate-x-[800px]" : ""
          }`}
          alt=""
          priority={true}
        />
      </div>
      <div
        className={`flex flex-col items-end justify-around text-center p-[3rem_12%_2rem_17%] z-[6] ${
          addClass ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`text-white duration-[.9s] delay-[.6s] ease-in-out ${
            addClass ? "translate-x-[0%]" : "translate-x-[800px]"
          }`}
        >
          <h3 className="font-semibold leading-none text-[1.5rem]">
            Já tem um login ?
          </h3>
          <p className="text-[0.95rem] p-[0.7rem_0]">
            Faça login com suas credencias e aproveite.
          </p>
          <button
            className="w-[130px] h-[41px] m-0 bg-transparent border-2 border-solid border-white outline-none rounded-[49px] cursor-pointer text-white uppercase text-[0.8rem] font-semibold shadow-[0_7px_25px__rgba(0,0,0,0.2)] duration-500 hover:bg-white hover:text-blue-500"
            onClick={changeMode}
          >
            Entrar
          </button>
        </div>
        <Image
          src={register}
          className={`w-full duration-[1.1s] delay-[.4s] ease-in-out ${
            addClass ? "translate-x-[0%]" : "translate-x-[800px]"
          }`}
          alt=""
          priority={true}
        />
      </div>
    </div>
  );
};

export default Panel;
