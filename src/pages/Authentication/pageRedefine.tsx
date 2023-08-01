import { useContext } from "react";
import { GlobalChangeContext } from "../../context/changeFormContext";
import { Redefine } from "../../components/redefine";

export const PageRedefine = () => {
  const { changeForm } = useContext(GlobalChangeContext);
  return (
    <section
      className={`absolute ${
        !changeForm ? "right-0" : "left-0"
      } w-full h-full flex  md:w-1/2 xl:w-1/2 bg-gray-50 dark:bg-gray-900`}>
        <Redefine/>
    </section>
  );
};