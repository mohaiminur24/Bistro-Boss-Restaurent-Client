import React from "react";
import SectionTitle from "../../../ShareAbleComponents/SectionTitle";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();

  const additemsfunction = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SectionTitle heading="add an item" subheading="what's New" />
      <div className="w-4/5 mx-auto p-10 rounded-md bg-gray-100">
        <form onSubmit={handleSubmit(additemsfunction)}>
          <div className="w-full">
            <label className="text-sm block" htmlFor="recepie">
              Recpie Name
            </label>
            <input
              className="w-full mt-2 px-3 py-2 text-sm rounded-md outline-none text-gray-500"
              type="text"
              {...register("recpieName")}
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
              <select
                {...register("catagory")}
                className="w-full mt-2 px-3 py-2 text-sm rounded-md outline-none text-gray-500"
                name="catagory"
                id=""
              >
                <option value="popular">popular</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="salad">salad</option>
                <option value="offered">offered</option>
              </select>
            </div>
            <div className="w-full">
              <label className="text-sm block" htmlFor="recepie">
                Price
              </label>
              <input
                {...register("price")}
                className="w-full mt-2 px-3 py-2 text-sm rounded-md outline-none text-gray-500"
                type="text"
                name="price"
                placeholder="price"
                id="recipename"
              />
            </div>
          </div>
          <div className="w-full mt-5">
            <label className="text-sm block" htmlFor="recepie">
              Recpie Details
            </label>
            <textarea
              {...register("details")}
              className="w-full mt-2 px-3 py-2 text-sm rounded-md outline-none text-gray-500"
              placeholder="Recpie Details"
              name="details"
              id="details"
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <input
            {...register("picture")}
            type="file"
            name="picture"
            placeholder="Your items picture"
            className="file-input file-input-bordered w-full max-w-xs block mt-4"
          />

          <input
            className="px-5 mt-5 rounded-md font-Inter font-bold text-white p-2 bg-gradient-to-r from-yellow-800 to-yellow-700"
            type="submit"
            value="Add Items"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
