import React, { useEffect, useRef, useState } from 'react';
import FindMenuByCatagory from '../CustomHooklayout/CustomHook';

const DaynamicMenu = ({catagory}) => {
    const [menu] = FindMenuByCatagory(catagory);
    return (
        <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
        {menu &&
          menu.map((mn) => (
            <div className="flex justify-start items-center gap-5">
              <img
                className="w-20 rounded-b-full rounded-e-full"
                src={mn.image}
                alt=""
              />
              <div className="text-xs font-inter">
                <h1 className="text-lg font-semibold">{mn.name}</h1>
                <p>{mn.recipe}</p>
              </div>
              <p className='ml-auto'>{mn.price}</p>
            </div>
          ))}
      </div>
      <div className="text-center">
        <button className="rounded-md py-2 px-4 border-b-2 text-sm hover:bg-black hover:text-white">View Full Menu</button>
      </div>
    </div>
    );
};

export default DaynamicMenu;