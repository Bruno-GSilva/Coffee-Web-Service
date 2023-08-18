import { LayoutDashboard, Package, LogOut } from "lucide-react";
import { AsideItem } from "./UI/AsideItem";
import { useContext } from "react";
import { GlobalAuthContext } from "../context/AuthenticationContex";

export const AsideBar = () => {
  const { setToken } = useContext(GlobalAuthContext);

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <AsideItem icon={LayoutDashboard} route={"/"} label="Dashboard" />
          <AsideItem icon={Package} route={"/produtos"} label="Produtos" />
          <AsideItem
            icon={LogOut}
            route={"/"}
            label="Logout"
            onClick={() => setToken(false)}
          />
        </ul>
      </div>
    </aside>
  );
};
