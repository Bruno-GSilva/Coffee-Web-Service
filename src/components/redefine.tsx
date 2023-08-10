import { motion } from "framer-motion";
import { Label, TextInput } from "flowbite-react";
// import { supabase } from "../lib/supabase";

import logo_cws from "../assets/coffee-logo.png";
import { Button } from "./UI/Button";

export const Redefine = () => {
    return (
        <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full  flex flex-col items-center justify-center lg:px-32 md:py-8 md:h-screen lg:py-0 "
        >
            <form className="w-full flex flex-col gap-4 md:border-2 border-black p-4 md:shadow-sm shadow-black">
                <div className="w-full flex flex-col items-center border-2 ">
                    <img src={logo_cws} className="w-32 h-32" />
                    <h1 className="text-xl font-semibold">
                        Coffee and Web Services, Inc.
                    </h1>
                </div>
                <h1 className="text-2xl font-semibold">Nova senha</h1>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Sua nova senha" />
                    </div>
                    <TextInput
                        id="password"
                        color={"success"}
                        placeholder="********"
                        required
                        type="password"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Digite sua senha novamente" />
                    </div>
                    <TextInput
                        id="password"
                        color={"success"}
                        placeholder="********"
                        required
                        type="password"
                    />
                </div>
                <Button label="Salvar" />
            </form>
        </motion.div>
    );
};
