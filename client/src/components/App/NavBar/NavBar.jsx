/* eslint-disable no-unused-vars */
import { useState } from "react";
import { navLinks } from "../../../constantes";
import logoPix from "../../../assets/svg/logpixcol.svg"

/* Imported icons */
import {TiThMenu} from 'react-icons/ti'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Link to='/'>
        <img src={logoPix} alt="pixeled" className="w-[220px] h-[60px]" />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-bold cursor-pointer text-[16px] text-black hover:text-pixColor ${
              active === nav.title ? "text-pixColor font-bold" : ""
            } ${index === navLinks.length - 1 ? "mr-6" : "mr-6"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Responsive styles */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div className="w-[25px] h-[25px] rounded-md p-2 cursor-pointer">
          <TiThMenu onClick={() => setToggle(!toggle)} className="w-[25px] h-[25px] text-pixPurple" />
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebarNavBar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-pixColor" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
