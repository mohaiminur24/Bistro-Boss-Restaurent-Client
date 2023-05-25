import React from "react";
import cart from '../../../assets/home/slide1.jpg'

const OurRecommendSection = () => {
  return (
    <div className="grid grid-cols-3 my-5 gap-5">
      <div className="bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-64"
            src={cart}
          />
        </figure>
        <div className="text-center p-5 font-Inter space-y-2">
          <h2 className="text-lg font-bold">Ceaser salad</h2>
          <p className="text-xs">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="text-center">
            <button className="bg-gray-200 px-4 py-2 border-b-2 border-b-yellow-700 rounded-md text-sm hover:bg-yellow-700 hover:text-white mt-5 border">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-64"
            src={cart}
          />
        </figure>
        <div className="text-center p-5 font-Inter space-y-2">
          <h2 className="text-lg font-bold">Ceaser salad</h2>
          <p className="text-xs">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="text-center">
            <button className="bg-gray-200 px-4 py-2 border-b-2 border-b-yellow-700 rounded-md text-sm hover:bg-yellow-700 hover:text-white mt-5 border">Add to cart</button>
          </div>
        </div>
      </div>
      <div className="bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-64"
            src={cart}
          />
        </figure>
        <div className="text-center p-5 font-Inter space-y-2">
          <h2 className="text-lg font-bold">Ceaser salad</h2>
          <p className="text-xs">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="text-center">
            <button className="bg-gray-200 px-4 py-2 border-b-2 border-b-yellow-700 rounded-md text-sm hover:bg-yellow-700 hover:text-white mt-5 border">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRecommendSection;
