"use client";
import { useState } from "react";
import Login from "../../components/(auth)/login";
import Panel from "../../components/(auth)/panel";
import Register from "../../components/(auth)/register";

const Auth = () => {
  const [addClass, setAddClass] = useState(false);

  const changeMode = () => {
    setAddClass(!addClass);
  };

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden bg-white before:absolute before:w-[2000px] before:h-[2000px] before:rounded-[50%] before:bg-gradient-to-tl before:from-blue before:to-[#60a5fa] before:top-[-10%] before:right-[48%] before:-translate-y-2/4 before:z-[6] before:duration-[1.8s] before:ease-in-out ${
        addClass
          ? "before:translate-x-[100%] before:-translate-y-[50%] before:right-[52%]"
          : ""
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className={`absolute z-[5] grid w-1/2 grid-cols-1s top-1/2 -translate-x-2/4 -translate-y-2/4 duration-[1s] delay-[.7s] ease-in-out ${
            addClass ? "left-1/4" : "left-3/4"
          }`}
        >
          <Login addClass={addClass} />
          <Register addClass={addClass} />
        </div>
      </div>
      <Panel changeMode={changeMode} addClass={addClass} />
    </div>
  );
};

export default Auth;
