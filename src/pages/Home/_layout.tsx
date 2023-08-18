import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
// import { Outlet } from "react-router-dom";
// import { Header } from "../../components/UI/Header";

const LayoutPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default LayoutPage;
