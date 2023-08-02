import React from "react";

interface PageHomeProps {}

export const PageHome: React.FC = ({}: PageHomeProps) => {
  return (
    <div
      className={`w-full h-screen flex justify-center items-center bg-slate-800`}
    >
      <h1 className={`text-white text-2xl font-bold`}>Hello Home!!!</h1>
    </div>
  );
};
