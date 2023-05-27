import React from 'react';

const ShopMenudetails = ({data}) => {

    return (
        <div className="bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-64"
            src={data.image}
          />
        </figure>
        <div className="text-center p-5 font-Inter space-y-2">
          <h2 className="text-lg font-bold">{data.name}</h2>
          <p className="text-xs">{data.recipe}</p>
          <div className="text-center">
            <button className="bg-gray-200 px-4 py-2 border-b-2 border-b-yellow-700 rounded-md text-sm hover:bg-yellow-700 hover:text-white mt-5 border">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default ShopMenudetails;