const PageNotFound: React.FC = () => {
  return (
    <div
      className={`w-full h-screen flex justify-center items-center bg-slate-800`}>
      <div className="flex flex-col justify-center items-center">
        <h1 className={`text-white text-4xl font-bold`}>404</h1>
        <h1 className={`text-white text-4xl font-bold`}>Page Not Found!</h1>
      </div>
    </div>
  );
};

export default PageNotFound