import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  const menubar = (
    <>
      <li>
        <NavLink to="/" className={({isActive})=> isActive && "text-yellow-500"}>
          <button>Home</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({isActive})=> isActive && "text-yellow-500"}>
          <button>Contact us</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className={({isActive})=> isActive && "text-yellow-500"}>
          <button>Dashboard</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/ourmenu" className={({isActive})=> isActive && "text-yellow-500"}>
          <button>Our Menu</button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/ourshop" className={({isActive})=> isActive && "text-yellow-500"}>
          <button className="flex gap-2 items-center">Our Shop <BsFillCartCheckFill className="text-2xl text-green-900"/></button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/signout" className={({isActive})=> isActive && "text-yellow-500"}>
          <button className="flex items-center gap-2">Sign Out
            <CgProfile className="text-2xl"/>
          </button>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-full bg-black text-white bg-opacity-40 fixed top-0 z-10">
      <div className="navbar bg-base-100 w-11/12 mx-auto bg-transparent">
        <div className="w-full navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-compact dropdown-content mt-3 p-2 shadow bg-black text-center rounded-box w-52"
            >
              {menubar}
            </ul>
          </div>
          <div className="w-fit flex flex-col text-center -space-y-2">
            <h1 className="font-Inter text-lg font-bold">Bistro Boss</h1>
            <p className="text-xs tracking-widest">Restaurent</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex justify-center items-center text-sm font-Inter">
          <ul className="menu-horizontal flex gap-4 items-center">{menubar}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
