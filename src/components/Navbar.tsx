import { useContext } from "react";
import Logo from "../assets/coffee-logo.png";
// import { AlignJustify } from "lucide-react";
import { GlobalAuthContext } from "../context/AuthenticationContex";

export const Navbar = () => {
  const { user } = useContext(GlobalAuthContext);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="z-50 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open sidebar</span>
              {/* <AlignJustify /> */}
            </button>
            <a href="/" className="flex ml-2 md:mr-24">
              <img src={Logo} className="h-8 w-8 mr-3" alt="logo" />
              <span className="self-center text-base font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Coffee Web Service
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <h1 className="mr-2">Bem Vindo, {user.username}</h1>
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
