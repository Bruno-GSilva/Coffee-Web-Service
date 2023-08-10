import { Login } from "../../components/login";
const PageLogin = () => {
  return (
    <section
      className={`absolute left-0 w-full h-full flex  md:w-1/2 xl:w-1/2 dark:bg-gray-900`}
    >
      <Login />
    </section>
  );
};

export default PageLogin;
