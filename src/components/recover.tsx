import { motion } from "framer-motion";

import Aws_logo from "../assets/coffee-logo.png";

import { Input } from "./UI/input";
import { Button } from "./UI/Button";

export const Recover: React.FC = () => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
      <div className="flex  flex-col items-center md:flex-row md:justify-center">
        <img src={Aws_logo} className="w-16 h-16 m-4 object-cover" />
        <p className="flex items-center text-xl font-semibold text-gray-900 dark:text-white">
          Coffee and Web Services, Inc.
        </p>
      </div>
      <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Recuperar Senha
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <Input
                mode="InputText"
                labelText="Informe seu email"
                inputPlaceHolder="name@company.com"
                inputType="email"
              />
            </div>
            <Button label="Entrar" />
          </form>
        </div>
      </div>
    </motion.div>
  );
};
