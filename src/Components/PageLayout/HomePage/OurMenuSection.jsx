import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const OurMenuSection = () => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/allmenusdetails")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((menu) => menu.category == "popular");
        setMenu(popular);
      });
  }, []);
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-5">
        {menu &&
          menu.map((mn) => (
            <div className="flex justify-center items-center gap-5">
              <img
                className="w-20 rounded-b-full rounded-e-full"
                src={mn.image}
                alt=""
              />
              <div className="text-xs font-inter">
                <h1 className="text-lg font-semibold">{mn.name}</h1>
                <p>{mn.recipe}</p>
              </div>
              <p>{mn.price}</p>
            </div>
          ))}
      </div>
      <div className="text-center">
        <NavLink to="/ourmenu"><button className="rounded-md py-2 px-4 border-b-2 text-sm hover:bg-black hover:text-white">View Full Menu</button></NavLink>
      </div>
    </div>
  );
};

export default OurMenuSection;
