import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex justify-between md:items-center bg-slate-600 md:gap-96 text-white px-10 md:pt-4 pt-8 relative">
      <span className="md:text-2xl relative bottom-1 md:bottom-0 font-bold tracking-wide">
        Portfolio
      </span>

      <ul
        className={`${menu ? "flex" : "hidden"} 
        flex-col items-center space-y-4
        py-4 font-semibold bg-gray-700 z-10  rounded-xl
        absolute top-16 left-1/2 transform -translate-x-1/2 w-[80%]
        md:flex md:flex-row md:gap-y-0 md:static md:py-0
        md:space-y-0 md:w-auto md:bg-transparent md:ml-auto md:text-lg md:justify-end`}
      >
        <li>
          <Link
            to="/"
            onClick={() => setMenu(false)}
            className="block p-2 hover:text-yellow-300"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            onClick={() => setMenu(false)}
            className="block p-2 hover:text-yellow-300"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/skills"
            onClick={() => setMenu(false)}
            className="block p-2 hover:text-yellow-300"
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="/projects"
            onClick={() => setMenu(false)}
            className="block p-2 hover:text-yellow-300"
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            onClick={() => setMenu(false)}
            className="block p-2 hover:text-yellow-300"
          >
            Contact
          </Link>
        </li>
      </ul>

      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => setMenu(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => setMenu(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
