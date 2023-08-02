import { createBrowserRouter } from "react-router-dom";

// authentication
import WaysProtect from "./WaysProtect";
// layouts
import { LayoutAuth } from "../pages/Authentication/_layout";

// screens
import { PageLogin } from "../pages/Authentication/pageLogin";
import { PageRecover } from "../pages/Authentication/pageRecover";
import { PageRedefine } from "../pages/Authentication/pageRedefine";
import { PageHome } from "../pages/Home";
import { PageNotFound } from "../pages/pageNotFound";

const AuthRoutes = [
  {
    index: true,
    path: "/login",
    element: <PageLogin />,
  },
  {
    path: "login/recovery",
    element: <PageRecover />,
  },
  {
    path: "login/redefine",
    element: <PageRedefine />,
  },
];

const ProtectRoutes = [
  {
    index:true,
    path:"/home",
    element: <PageHome />,
  },
];

export const Ways = createBrowserRouter([
  {
    path: "/",
    element: <WaysProtect />,
    children: ProtectRoutes,
    errorElement: <PageNotFound />,
  },
  {
    path: "/",
    element: <LayoutAuth />,
    children: AuthRoutes,
  },
]);
