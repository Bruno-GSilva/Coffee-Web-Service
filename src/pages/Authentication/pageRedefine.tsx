import { Redefine } from "../../components/redefine";

const PageRedefine = () => {
  return (
    <section
      className={`absolute left-0 w-full h-full flex  md:w-1/2 xl:w-1/2 bg-gray-50 dark:bg-gray-900`}>
        <Redefine/>
    </section>
  );
};

export default PageRedefine