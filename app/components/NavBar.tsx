export const NavBar = () => {
  return (
    <div className="w-full flex px-[5%] py-8 bg-dark-800 items-center justify-between">
      <div className="flex items-center gap-[100px]">
        <h2 className="font-r text-m  text-text-100">Finan Smart</h2>
        <h2 className="text-3xs font-r text-text-300">Home</h2>
        <h2 className="text-3xs font-r text-text-300">Finan Smart</h2>
        <h2 className="text-3xs font-r text-text-300">Finan Smart</h2>
      </div>
      <div className="flex items-center gap-10">
        <button className=" w-[150px] py-2 text-3xs font-mb text-text-200 rounded-md  border-text-200">
          Log In
        </button>
        <button className=" w-[150px] py-2 text-3xs font-sb bg-text-200 hover:bg-text-100 text-dark-800  rounded-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};
