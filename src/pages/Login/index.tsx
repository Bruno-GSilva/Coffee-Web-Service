import { useContext } from "react";
import { Register } from "../../components/register";
import { Login } from "../../components/login";

import background from "../../assets/bg-coffee.jpg";
import { GlobalChangeContext } from "../../context/changeFormContext";

export const PageLogin = () => {
    const { changeForm } = useContext(GlobalChangeContext);
    return (
        <main className="w-full h-screen flex">
            <div className="relative w-full h-full flex">
                <div className="flex absolute w-full h-screen">
                    <section
                        className={`absolute ${
                            !changeForm ? "right-0" : "left-0"
                        } w-full h-full flex  md:w-1/2 xl:w-1/2 bg-gray-50 dark:bg-gray-900`}
                    >
                        {changeForm ? <Login /> : <Register />}
                    </section>
                </div>
                <div
                    className={`z-50 absolute hidden md:block  w-1/2 h-full ${
                        changeForm ? "right-0" : "left-0"
                    } flex justify-center items-center`}
                >
                    <h1 className="md:text-2xl xl:4xl absolute mb-20 font-bold text-white p-4 bg-black bg-opacity-40 rounded-2xl">
                        Seja Bem Vindo! A CWS
                    </h1>
                    <img
                        src={background}
                        alt="bg"
                        className={`w-full h-full`}
                    />
                </div>
            </div>
        </main>
    );
};
