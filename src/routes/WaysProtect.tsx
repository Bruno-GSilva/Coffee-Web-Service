import { Navigate, Outlet } from "react-router-dom";

const WaysProtect = () => {
  let auth = { token: false };
  if (auth.token) {
    return (
      <>
        <Outlet />
        <Navigate to={"/home"} />
      </>
    );
  } else return <Navigate to={"/login"} />
  // return auth.token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default WaysProtect;