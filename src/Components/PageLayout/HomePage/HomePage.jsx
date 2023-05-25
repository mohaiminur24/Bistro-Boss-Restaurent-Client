import React from "react";
import Navbar from "../../ShareAbleComponents/Navbar";
import Slider from "../../ShareAbleComponents/Slider";
import SectionTitle from "../../ShareAbleComponents/SectionTitle";
import SubSlider from "./SubSlider";
import BistroBossSection from "./BistroBossSection";
import OurMenuSection from "./OurMenuSection";
import OurRecommendSection from "./OurRecommendSection";

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
        <div className="my-20 bg-black w-full h-52 flex justify-center items-center text-white font-Raleway">
            <h1 className="text-4xl font-semibold">Contact us: 017572458**</h1>
        </div>
        <SectionTitle heading="Chef recommends" subheading="Should Try"/>
        <OurRecommendSection/>


      </div>
    </div>
  );
};

export default HomePage;
