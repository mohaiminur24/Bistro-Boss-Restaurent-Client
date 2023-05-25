import React from "react";
import Navbar from "../../ShareAbleComponents/Navbar";
import Slider from "../../ShareAbleComponents/Slider";
import SectionTitle from "../../ShareAbleComponents/SectionTitle";
import SubSlider from "./SubSlider";
import BistroBossSection from "./BistroBossSection";
import OurMenuSection from "./OurMenuSection";

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
        <BistroBossSection />
        <SectionTitle heading="From Our Menu" subheading=" Check it out" />
        <OurMenuSection/>

        
      </div>
    </div>
  );
};

export default HomePage;
