import React from "react";
import SectionTitle from "../../ShareAbleComponents/SectionTitle";
import feature from "../../../assets/home/featured.jpg";
import '../../../Style.css';

const Featuressection = () => {
  return (
    <div className="my-20 w-full feautre-home-page py-10 text-white">
        <SectionTitle heading="From our menu" subheading="Check it out" />
        <div className="w-4/5 mb-20 gap-5 mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center">
          <img className="rounded-md" src={feature} alt="" />
          <div className="text-white">
            <h1 className="text-2xl font-bold">March 20, 2023 <br /> WHERE CAN I GET SOME?</h1>
            <p className="text-sm opacity-70 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
          </div>
        </div>
    </div>
  );
};

export default Featuressection;
