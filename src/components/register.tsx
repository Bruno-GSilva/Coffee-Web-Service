import { motion } from "framer-motion";
import { useContext } from "react";
import { GlobalChangeContext } from "../context/changeFormContext";

import Aws_logo from "../assets/coffee-logo.png";

import { Input } from "./UI/input";
import { Button } from "./UI/Button";

export const Register = () => {
    const { setChangeForm } = useContext(GlobalChangeContext);
    return (
        <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
        >
            <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
                <img src={Aws_logo} className="w-12 h-12 mr-4 object-cover" />
                Coffee and Web Services, Inc.
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <Input
                                mode="InputText"
                                inputType="email"
                                labelText="Your email"
                                inputPlaceHolder="name@company.com"
                            />
                        </div>
                        <div>
                            <Input
                                mode="InputText"
                                inputType="password"
                                labelText="Password"
                                inputPlaceHolder="********"
                            />
                        </div>
                        <div>
                            <Input
                                mode="InputText"
                                inputType="password"
                                labelText="confirm password"
                                inputPlaceHolder="********"
                            />
                        </div>
                        <div className="flex items-start">
                            <Input
                                mode="Checkbox"
                                labelText="I accept the"
                                labelTextCheckbox="Terms and Conditions"
                            />
                        </div>
                        <Button label="Create an account" />
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?{" "}
                            <a
                                href="#"
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                onClick={() => setChangeForm(true)}
                            >
                                Login here
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};
