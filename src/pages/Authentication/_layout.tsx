import { useContext } from "react";

import background from "../../assets/bg-coffee.jpg";
import { GlobalChangeContext } from "../../context/changeFormContext";
import { Outlet } from "react-router-dom";

export const LayoutAuth = () => {
  const { changeForm } = useContext(GlobalChangeContext);
  return (
    <main className="w-full h-screen flex">
      <div className="relative w-full h-full flex">
        <div className="flex absolute w-full h-screen">{<Outlet />}</div>
        <div
          className={`z-50 absolute hidden md:flex md:justify-center md:items-center w-1/2 h-full ${
            changeForm ? "right-0" : "left-0"
          }`}>
          <h1 className="md:text-2xl xl:4xl absolute mb-20 font-bold text-white p-4 bg-black bg-opacity-40 rounded-2xl">
            Seja Bem Vindo! A CWS
          </h1>
          <img src={background} alt="bg" className={`w-full h-full`} />
        </div>
      </div>
    </main>
  );
};
