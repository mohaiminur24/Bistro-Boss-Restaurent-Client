import React, { useEffect, useState } from "react";
import PageTitle from "../../ShareAbleComponents/PageTitle";
import cover from "../../../assets/shop/banner2.jpg";
import Navbar from "../../ShareAbleComponents/Navbar";
import Footer from "../../ShareAbleComponents/Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../../Style.css";
import ShopMenudetails from "../../ShareAbleComponents/ShopMenudetails";
import FindMenuByCatagory from "../../CustomHooklayout/CustomHook";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categorys = ["salad","pizza","soup","dessert","drinks"];
  const {category} = useParams();
  let initialindex = categorys.indexOf(category);
  if(initialindex < 0){
    initialindex = 0;
  };

  const [salad] = FindMenuByCatagory("salad");
  const [pizza] = FindMenuByCatagory("pizza");
  const [soups] = FindMenuByCatagory("soup");
  const [dessert] = FindMenuByCatagory("dessert");
  const [drinks] = FindMenuByCatagory("drinks");


  return (
    <div>
      <Navbar />
      <div className="pt-16 bg-black"></div>
      <PageTitle
        img={cover}
        heading="Our shop"
        subheading="would you like to try dish"
      />
      <div className="w-4/5 mx-auto my-20 font-Inter">
        <Tabs defaultIndex={initialindex}>
          <TabList className="text-center mb-10 text-sm font-normal uppercase">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {salad &&
                salad.map((menu) => (
                  <ShopMenudetails key={menu._id} data={menu} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pizza &&
                pizza.map((menu) => (
                  <ShopMenudetails key={menu._id} data={menu} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {soups &&
                soups.map((menu) => (
                  <ShopMenudetails key={menu._id} data={menu} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {dessert &&
                dessert.map((menu) => (
                  <ShopMenudetails key={menu._id} data={menu} />
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {drinks &&
                drinks.map((menu) => (
                  <ShopMenudetails key={menu._id} data={menu} />
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default OurShop;
