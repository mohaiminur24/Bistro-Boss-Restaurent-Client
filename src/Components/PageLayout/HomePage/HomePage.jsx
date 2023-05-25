import React from "react";
import Navbar from "../../ShareAbleComponents/Navbar";
import Slider from "../../ShareAbleComponents/Slider";
import SectionTitle from "../../ShareAbleComponents/SectionTitle";
import SubSlider from "./SubSlider";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="w-4/5 mx-auto">
        <SectionTitle
          heading="order online"
          subheading="From 11:00am to 10:00pm"
        />
        <SubSlider />
      </div>
    </div>
  );
};

export default HomePage;
