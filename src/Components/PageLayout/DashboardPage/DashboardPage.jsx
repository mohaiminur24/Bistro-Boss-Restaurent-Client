import React, { useContext, useEffect, useState } from "react";
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
import { cartdataload } from "../../CustomHooklayout/CustomHook";
import { AuthContext } from "../../AuthContextLayout/AuthContextLayout";

const DashboardPage = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin, setAdmin] = useState(false);
    const [cart] = cartdataload();

    useEffect(()=>{
        fetch(`http://localhost:5000/singleuser?email=${user.email}`).then(res=> res.json())
        .then(data=> {
          if(data.role == "admin"){
            setAdmin(true);
          }
        })
    },[user]);


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
                <div className="font-bold uppercase font-Raleway text-xs py-5 border-b w-full bg-transparent">
                    <li className="bg-transparent"><NavLink to="adminhome" className={({isActive})=> isActive && "text-white bg-transparent"}><AiFillHome className="text-xl"/>Admin Home</NavLink></li>
                    <li className="bg-transparent"><NavLink to="additem" className={({isActive})=> isActive && "text-white bg-transparent"}><BiRestaurant className="text-xl"/> Add Items</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><TfiMenuAlt className="text-xl"/> Magage items</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><FaBookMedical className="text-xl"/> Manage Bookings</NavLink></li>
                    <li className="bg-transparent"><NavLink to="alluser" className={({isActive})=> isActive && "text-white bg-transparent"}><FaUsers className="text-xl"/> All users</NavLink></li>
                </div>
                :
                <div className="font-bold uppercase font-Raleway text-xs py-5 border-b w-full bg-transparent">
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><AiFillHome className="text-xl"/>User Home</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><FaCalendarAlt className="text-xl"/>Reservation</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><FaCcApplePay className="text-xl"/> Payment History</NavLink></li>
                    <li className="bg-transparent"><NavLink to="mycart" className={({isActive})=> isActive && "text-white bg-transparent"}><BsCartCheckFill className="text-xl"/><span>My Cart</span> <span className="font-normal font-Inter px-2 text-black py-1 rounded-lg">{cart.length}</span></NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><MdRateReview className="text-xl"/> Add review</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><TbBrandBooking className="text-xl"/> My Booking</NavLink></li>
                </div>
                }

                <div className="font-bold uppercase font-Raleway text-xs pt-5 bg-transparent">
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><AiFillHome className="text-xl"/> Home</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><FiMenu className="text-xl"/> Menu</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><BsFillHandbagFill className="text-xl"/> Shop</NavLink></li>
                    <li className="bg-transparent"><NavLink to="/" className={({isActive})=> isActive && "text-white bg-transparent"}><MdEmail className="text-xl"/> Contact</NavLink></li>
                </div>
            </div>
        </ul>
      </div>

    </div>
  );
};

export default DashboardPage;
