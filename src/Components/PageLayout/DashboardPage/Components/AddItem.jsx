import React from "react";
import SectionTitle from "../../../ShareAbleComponents/SectionTitle";

const AddItem = () => {
  return (
    <div>
      <SectionTitle heading="add an item" subheading="what's New" />
      <div className="w-4/5 mx-auto p-10 rounded-md bg-gray-100">
        <form>
          <div className="w-full">
            <label className="text-sm block" htmlFor="recepie">
              Recpie Name
            </label>
            <input
              className="w-full mt-2 px-3 py-2 text-sm rounded-md outline-none text-gray-500"
              type="text"
              name="recpieName"
              placeholder="Recpie Name"
              id="recipename"
            />
          </div>
          <div className="flex justify-between items-center gap-5 mt-3">
            <div className="w-full">
              <label className="text-sm block" htmlFor="recepie">
                Catagory
              </label>
              <input
                className="w-full mt-2 px-3 py-2 text-sm rounded-md outline-none text-gray-500"
                type="text"
                name="catagory"
                placeholder="catagory"
                id="recipename"
              />
            </div>
            <div className="w-full">
              <label className="text-sm block" htmlFor="recepie">
                Price
              </label>
              <input
                className="w-full mt-2 px-3 py-2 text-sm rounded-md outline-none text-gray-500"
                type="text"
                name="recpieName"
                placeholder="price"
                id="recipename"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
