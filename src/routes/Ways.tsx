import { createBrowserRouter } from "react-router-dom";

// authentication
import WaysProtect from "./WaysProtect";

// layouts
import LayoutAuth from "../pages/Authentication/_layout";
import LayoutPage from "../pages/Home/_layout";

// screens
import PageLogin from "../pages/Authentication/pageLogin";
import PageRecover from "../pages/Authentication/pageRecover";
import PageRedefine from "../pages/Authentication/pageRedefine";
import PageNotFound from "../pages/pageNotFound";
import PageDashboard from "../pages/Home/Dashboard";
import PageProdutos from "../pages/Home/Produtos";

const AuthRoutes = [
    {
        index: true,
        path: "login",
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
        path: "/",
        element: <LayoutPage />,
        children: [
            {
                index: true,
                element: <PageDashboard />,
            },
            {
                path: "/produtos",
                element: <PageProdutos />,
            },
        ],
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
