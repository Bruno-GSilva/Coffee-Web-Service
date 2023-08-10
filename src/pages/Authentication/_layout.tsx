import background from "../../assets/bg-coffee.jpg";
import { Outlet } from "react-router-dom";

const LayoutAuth = () => {
    return (
        <main className="w-full h-screen flex">
            <div className="relative w-full h-full flex justify-center items-center">
                <div className="flex absolute w-full h-screen">
                    {<Outlet />}
                </div>
                <div
                    className={`z-50 absolute hidden lg:flex md:justify-center md:items-center w-1/2 h-full right-0`}
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

export default LayoutAuth;
