import { motion } from "framer-motion";
import { Checkbox, Label, TextInput } from "flowbite-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import logo_cws from "../assets/coffee-logo.png";
import { Button } from "./UI/Button";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalAuthContext } from "../context/AuthenticationContex";

export const Login = () => {
    const { setToken, token } = useContext(GlobalAuthContext);

    const createUserFormSchema = z.object({

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
        setToken(true);
        console.log(user);
    }

    return (
        <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full  flex flex-col items-center justify-center lg:px-32 md:py-8 md:h-screen lg:py-0 "
        >
            <form
                className="w-full flex flex-col gap-4 md:border-2 border-black p-4 md:shadow-sm shadow-black"
                onSubmit={handleSubmit(createUser)}
            >
                <div className="w-full flex flex-col items-center border-2 ">
                    <img src={logo_cws} className="w-32 h-32" />
                    <h1 className="text-xl font-semibold">
                        Coffee and Web Services, Inc.
                    </h1>
                </div>
                <h1 className="text-2xl font-semibold">Login</h1>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Email" />
                    </div>
                    <TextInput
                        id="email"
                        color={errors.email ? "failure" : "success"}
                        placeholder="name@gmail.com"
                        required
                        type="email"
                        helperText={
                            <span className="font-medium">
                                {errors.email?.message}
                            </span>
                        }
                        {...register("email")}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Senha" />
                    </div>
                    <TextInput
                        id="password"
                        color={errors.password ? "failure" : "success"}
                        placeholder="********"
                        required
                        type="password"
                        helperText={
                            <span className="font-medium">
                                {errors.password?.message}
                            </span>
                        }
                        {...register("password")}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Lembrar senha</Label>
                    </div>

                    <Link to={"/login/recovery"}>
                        <p className="text-sky-800 text-sm font-semibold underline">
                            Esqueci minha senha
                        </p>
                    </Link>
                </div>
                <Button label="Entrar" />
            </form>

            {token && <Navigate to="/" replace={true} />}
        </motion.div>
    );
};
