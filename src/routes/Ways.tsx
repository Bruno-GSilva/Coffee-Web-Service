import { createBrowserRouter } from "react-router-dom";

// authentication
import WaysProtect from "./ProtectWays";
// layouts
import { LayoutAuth } from "../pages/Authentication/_layout";

// screens
import { PageLogin } from "../pages/Authentication/pageLogin";
import { PageRecover } from "../pages/Authentication/pageRecover";
import { PageRedefine } from "../pages/Authentication/pageRedefine";
import { PageHome } from "../pages/Home";
import { PageNotFound } from "../pages/pageNotFound";

export const Ways = createBrowserRouter([
  {
    path: "/",
    element: <WaysProtect />,
    children: [
      {
        path: "home",
        element: <PageHome />,
      },
    ],
    errorElement: <PageNotFound />,
  },
  {
    path: "/login/*",
    element: <LayoutAuth />,
    children: [
      {
        index:true,
        element: <PageLogin />,
      },
      {
        path: "recovery",
        element: <PageRecover />,
      },
      {
        path: "redefine",
        element: <PageRedefine />,
      },
      
    ],
  },
]);
