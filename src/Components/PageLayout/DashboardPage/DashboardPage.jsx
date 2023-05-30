import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FiMenu } from "react-icons/Fi";
import { BsCartCheckFill, BsFillHandbagFill } from "react-icons/bs";
import { MdEmail, MdRateReview } from "react-icons/md";
import { BiRestaurant } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaBookMedical, FaCalendarAlt, FaCcApplePay, FaUsers } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { TbBrandBooking } from "react-icons/tb";

const DashboardPage = () => {
    const [isAdmin, setAdmin] = useState(false);



  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-10">
      <label
          htmlFor="my-drawer-2"
          className="px-3 py-2 text-black rounded-md text-sm absolute top-2 left-2"
        >
          <ImMenu/>
        </label>
        <div><Outlet/></div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-base-content bg-yellow-600 h-auto">
            <div>
            <div className="font-bold uppercase mb-10 font-Inter">
                <h1 className="text-3xl">Bistro Boss</h1>
                <p className="text-sm font-normal tracking-[10px]">Restaurant</p>
            </div>
                { 
                isAdmin ? 
                <div className="font-bold uppercase font-Cinzel text-xs py-5 border-b w-full bg-transparent">
                    <li className="bg-transparent"><NavLink to="" className={({isActive})=> isActive && "text-white bg-transparent"}><AiFillHome/>Admin Home</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><BiRestaurant/> Add Items</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><TfiMenuAlt/> Magage items</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><FaBookMedical/> Manage Bookings</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><FaUsers/> All users</NavLink></li>
                </div>
                :
                <div className="font-bold uppercase font-Cinzel text-xs py-5 border-b w-full bg-transparent">
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><AiFillHome/>User Home</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><FaCalendarAlt/>Reservation</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><FaCcApplePay/> Payment History</NavLink></li>
                    <li className="bg-transparent"><NavLink to="mycart" className={({isActive})=> isActive && "text-white bg-transparent"}><BsCartCheckFill/>My Cart</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><MdRateReview/> Add review</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><TbBrandBooking/> My Booking</NavLink></li>
                </div>

                }

                <div className="font-bold uppercase font-Cinzel text-xs pt-5 bg-transparent">
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><AiFillHome/> Home</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><FiMenu/> Menu</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><BsFillHandbagFill/> Shop</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><MdEmail/> Contact</NavLink></li>
                </div>
            </div>
        </ul>
      </div>

    </div>
  );
};

export default DashboardPage;
