import { Navigate, Outlet } from "react-router-dom";
import { useReadLocalStorage } from "usehooks-ts";

const WaysProtect = () => {
    const Auth = useReadLocalStorage("token");
    return Auth? <Outlet /> : <Navigate to={"/login"} />;
};

export default WaysProtect;
