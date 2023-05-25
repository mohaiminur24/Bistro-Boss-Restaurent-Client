import React from "react";

const PageTitle = ({ img, heading, subheading }) => {
  return (
    <div className="w-full h-[400px] relative">
      <img className="w-full h-full" src={img} />
      <div className="w-full h-full absolute top-0 flex justify-center items-center text-white font-Cinzel">
        <div className="p-10 bg-black bg-opacity-50 w-2/5 rounded-md text-center py-20">
          <h1 className="font-bold text-5xl uppercase mb-3">{heading}</h1>
          <p className="text-xs uppercase tracking-wider">{subheading}</p>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
