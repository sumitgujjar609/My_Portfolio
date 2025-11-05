import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex justify-between md:items-center bg-slate-600 text-white px-10 pt-6 relative">
      <span className="md:text-2xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${menu ? "flex" : "hidden"} 
        flex-col items-center space-y-4
  py-4 font-semibold bg-black bg-opacity-60 rounded-xl
  absolute top-16 left-1/2 transform -translate-x-1/2 w-[80%]
  md:flex md:flex-row md:gap-y-0 md:static md:py-0
   md:space-y-0 md:w-auto md:bg-transparent md:ml-auto md:text-lg md:justify-end`}
      >
        <li><a href="#" onClick={() => setMenu(false)} className="block p-2 ">Home</a></li>
        <li><a href="#About" onClick={() => setMenu(false)} className="block p-2 ">About</a></li>
        <li><a href="#Skills" onClick={() => setMenu(false)} className="block p-2 ">Skills</a></li>
        <li><a href="#Projects" onClick={() => setMenu(false)} className="block p-2 ">Projects</a></li>
        <li><a href="#Contact" onClick={() => setMenu(false)} className="block p-2 ">Contact</a></li>
      </ul>

      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => setMenu(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => setMenu(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
