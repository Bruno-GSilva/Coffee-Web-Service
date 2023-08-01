import { useContext } from "react";
import { GlobalChangeContext } from "../../context/changeFormContext";
import { Recover } from "../../components/recover";

export const PageRecover = () => {
  const { changeForm } = useContext(GlobalChangeContext);
  return (
    <section
      className={`absolute ${
        !changeForm ? "right-0" : "left-0"
      } w-full h-full flex  md:w-1/2 xl:w-1/2 bg-gray-50 dark:bg-gray-900`}>
        <Recover/>
    </section>
  );
};