import { useContext } from "react";
import { Register } from "../../components/register";
import { Login } from "../../components/login";
import { GlobalChangeContext } from "../../context/changeFormContext";

export const PageLogin = () => {
  const { changeForm } = useContext(GlobalChangeContext);
  return (
    <section
      className={`absolute ${
        !changeForm ? "right-0" : "left-0"
      } w-full h-full flex  md:w-1/2 xl:w-1/2 bg-gray-50 dark:bg-gray-900`}>
      {changeForm ? <Login /> : <Register />}
    </section>
  );
};
