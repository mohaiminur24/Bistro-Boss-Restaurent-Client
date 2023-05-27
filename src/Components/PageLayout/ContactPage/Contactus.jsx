import React from "react";
import Navbar from "../../ShareAbleComponents/Navbar";
import PageTitle from "../../ShareAbleComponents/PageTitle";
import banner from "../../../assets/contact/banner.jpg";
import SectionTitle from "../../ShareAbleComponents/SectionTitle";
import { FiPhoneCall } from "react-icons/Fi";
import { SlLocationPin } from "react-icons/Sl";
import { BsClockHistory } from "react-icons/bs";
import Footer from "../../ShareAbleComponents/Footer";

const Contactus = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16 bg-black"></div>
      <PageTitle
        heading="Contact us"
        subheading="would you like to try dish"
        img={banner}
      />
      <div className="w-4/5 mx-auto">
        <SectionTitle heading="Our location" subheading="Visit Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="border rounded-md">
            <div className="w-full bg-yellow-600 py-3 text-center border border-yellow-600">
              <FiPhoneCall className="text-2xl text-white inline-block" />
            </div>
            <div className="bg-gray-100 h-32 mx-5 mb-5 flex flex-col justify-center items-center">
              <h1 className="uppercase text-2xl">phone</h1>
              <p>+38 (012) 34 56 789</p>
            </div>
          </div>

          <div className="border rounded-md">
            <div className="w-full text-white bg-yellow-600 py-3 text-center border border-yellow-600">
              <SlLocationPin className="text-2xl text-white inline-block" />
            </div>
            <div className="bg-gray-100 h-32 mx-5 mb-5 flex flex-col justify-center items-center">
              <h1 className="uppercase text-2xl">Address</h1>
              <p>+38 (012) 34 56 789</p>
            </div>
          </div>
          <div className="border rounded-md">
            <div className="w-full bg-yellow-600 py-3 text-center border border-yellow-600">
              <BsClockHistory className="text-2xl text-white inline-block" />
            </div>
            <div className="bg-gray-100 h-32 mx-5 mb-5 flex flex-col justify-center items-center">
              <h1 className="uppercase text-2xl">Working Hours</h1>
              <div className="text-sm">
                <p>Mon - Fri 08:00 - 22:00</p>
                <p>Sat - Sun 10:00 - 23:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionTitle heading="Contact From" subheading="Send us a Message" />
      <div className="w-4/5 mx-auto">
      <div className="my-10 bg-slate-200 p-10">
        <form className="font-Inter">
          <div className="flex gap-5 justify-center items-center">
            <div className="w-full">
              <label className="text-sm" htmlFor="name">
                Name
              </label>
              <input
                className="text-xs w-full text-gray-400 border block px-4 py-3 outline-none rounded-md"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full">
              <label className="text-sm" htmlFor="name">
                Email
              </label>
              <input
                className="text-xs w-full text-gray-400 border block px-4 py-3 outline-none rounded-md"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="w-full">
              <label className="text-sm" htmlFor="name">
                Phone
              </label>
              <input
                className="text-xs w-full text-gray-400 border block px-4 py-3 outline-none rounded-md"
                type="text"
                name="phone"
                placeholder="Enter your Phone number"
              />
            </div>
            <div className="w-full">
              <label className="text-sm" htmlFor="name">
                Message
              </label>
              <textarea className="text-xs w-full text-gray-400 border block px-4 py-3 outline-none rounded-md" placeholder="Enter your message here" name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="w-full text-center mt-10">
                <button className="px-5 py-2 bg-gradient-to-r from-yellow-800 to-yellow-600 text-white rounded-sm">Send Message</button>
            </div>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contactus;
