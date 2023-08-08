import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Aws_logo from "../assets/coffee-logo.png";

import { Input } from "./UI/input";
import { Button } from "./UI/Button";
import { useForm } from "react-hook-form";
import { supabase } from "./lib/supabase";

export const Login = () => {
  const createUserFormSchema = z.object({
    name: z
      .string()
      .nonempty("o nome é obrigatorio")
      .transform((nomeCompleto) =>
        nomeCompleto
          .trim()
          .split(" ")
          .map((nome) => nome[0].toUpperCase())
          .join("")
      ),

    email: z
      .string()
      .nonempty("o e-mail é obrigatorio")
      .email("formato do email invalido"),
    password: z
      .string()
      .nonempty("a senha é obrigatoria")
      .min(8, "a senha precisa de no minimo 8 caracteres"),
  });

  type createUserFormData = z.infer<typeof createUserFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  async function createUser(user: createUserFormData) {
    const { error } = await supabase.storage
      .from("auth-form-cws")
      .upload(user.email, user.email);
    console.error(error);
  }
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 "
    >
      <div className="flex  flex-col items-center md:flex-row md:justify-center">
        <img src={Aws_logo} className="w-16 h-16 object-cover" />
        <p className="flex items-center text-xl mb-4 font-semibold text-gray-900 dark:text-white">
          Coffee and Web Services, Inc.
        </p>
      </div>
      <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(createUser)}
          >
            <div>
              <Input
                mode="InputText"
                labelText="Nome Completo"
                inputPlaceHolder="Ex: Bruno Gomes"
                inputType="text"
                register={{ ...register("name") }}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <Input
                mode="InputText"
                labelText="Seu Email"
                inputPlaceHolder="name@company.com"
                inputType="email"
                register={{ ...register("email") }}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <Input
                mode="InputText"
                labelText="Sua Senha"
                inputPlaceHolder="********"
                inputType="password"
                register={{ ...register("password") }}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <Input
              navigate="recovery"
              mode="Checkbox"
              labelTextCheckbox="Esqueceu a senha?"
              inputType="checkbox"
              labelText="Lembrar Senha"
            />

            <Button label="Entrar" buttonType="submit" />
          </form>
        </div>
      </div>
    </motion.div>
  );
};
