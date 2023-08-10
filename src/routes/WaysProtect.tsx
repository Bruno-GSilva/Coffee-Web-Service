import { Navigate, Outlet } from "react-router-dom";
// import { useReadLocalStorage } from "usehooks-ts";

const WaysProtect = () => {
  // const token: boolean | null = useReadLocalStorage("token");
  const auth = {token: true}
  return auth.token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default WaysProtect;
