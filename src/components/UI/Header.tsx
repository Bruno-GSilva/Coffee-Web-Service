import { useState } from "react";
import Logo_CWS from "../../assets/coffee-logo.png";
import { AsideBar } from "./Sidebar";

export const Header = () => {
    const [openAside, setOpenAside] = useState<boolean>(false);

    return (
        <>
            <header className="flex justify-between items-center w-full py-1 px-3 bg-slate-600">
                <div className="hidden lg:flex lg:gap-2 lg:items-center">
                    <img src={Logo_CWS} alt="...logo" className="w-16 h-16" />
                    <h1 className="text-xl font-semibold">Coffee web service</h1>
                </div>
                <div
                    className="lg:hidden"
                    onClick={() => setOpenAside(!openAside)}
                >
                    <img src={'https://cdn.iconscout.com/icon/free/png-256/free-bars-1440391-1216351.png?f=webp'} alt="...logo" className="w-12 h-12" />
                </div>

                <span className="flex gap-2 items-center">
                    <h1>bem vindo, Natan!</h1>
                    <img
                        src={
                            "https://cdn-icons-png.flaticon.com/256/4263/4263296.png"
                        }
                        alt="...user"
                        className="w-12 h-12"
                    />
                </span>
            </header>
            <AsideBar openAside={openAside} />
        </>
    );
};
