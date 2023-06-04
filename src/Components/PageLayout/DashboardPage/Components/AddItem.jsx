import React from "react";
import SectionTitle from "../../../ShareAbleComponents/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../CustomHooklayout/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const AddItem = () => {
  const axiosSecure = useAxiosSecure();
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [isloading, setLoading] =useState(false)
  const imgHostingUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${
    import.meta.env.VITE_ImgBB_api
  }`;

  const additemsfunction = (data) => {
    setLoading(true);
    const fromData = new FormData();
    fromData.append("image", data.picture[0]);

    fetch(imgHostingUrl, {
      method: "POST",
      body: fromData,
    })
      .then((res) => res.json())
      .then((imgres) => {
        const displayUrl = imgres.data.display_url;

        axiosSecure.post('/additem',{
          name: data.recpieName,
          recipe: data.details,
          image: displayUrl,
          category: data.catagory,
          price: parseFloat(data.price)
        }).then(res=>{
          if(res.data.insertedId){
            reset();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your items save succesfully!',
              showConfirmButton: false,
              timer: 1500
            });
            setLoading(false);
          }
        });
      });
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
              {...register("recpieName", {required:true})}
              name="recpieName"
              placeholder="Recpie Name"
              id="recpieName"   
            />
            {errors.recpieName?.type === 'required' && <p role="alert" className="text-xs mt-1 text-red-600 ml-2">recpieName is required</p>}
          </div>
          <div className="flex justify-between items-center gap-5 mt-3">
            <div className="w-full">
              <label className="text-sm block" htmlFor="recepie">
                Catagory
              </label>
              <select
                {...register("catagory",{required:true})}
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
                {...register("price", {required:true})}
                className="w-full mt-2 px-3 py-2 text-sm rounded-md outline-none text-gray-500"
                type="number"
                name="price"
                placeholder="$ price"
                id="recipename"
              />
              {errors.price?.type === 'required' && <p role="alert" className="text-xs mt-1 text-red-600 ml-2">price is required</p>}
            </div>
          </div>
          <div className="w-full mt-5">
            <label className="text-sm block" htmlFor="recepie">
              Recpie Details
            </label>
            <textarea
              {...register("details", {required:true})}
              className="w-full mt-2 px-3 py-2 text-sm rounded-md outline-none text-gray-500"
              placeholder="Recpie Details"
              name="details"
              id="details"
              cols="30"
              rows="5"
            ></textarea>
            {errors.details?.type === 'required' && <p role="alert" className="text-xs mt-1 text-red-600 ml-2">details is required</p>}
          </div>

          <input
            {...register("picture", {required:true})}
            type="file"
            name="picture"
            placeholder="Your items picture"
            className="file-input file-input-bordered w-full max-w-xs block mt-4"
          />
          {errors.picture?.type === 'required' && <p role="alert" className="text-xs mt-1 text-red-600 ml-2">picture is required</p>}
          
          {
            isloading ? <div className="h-10 w-10 mt-5 mx-auto border-8 border-gray-600 rounded-full border-dashed animate-spin"></div> : <input
            className="px-5 mt-5 rounded-md font-Inter font-bold text-white p-2 bg-gradient-to-r from-yellow-800 to-yellow-700"
            type="submit"
            value='Add Items'
          />
          }
        </form>
      </div>
    </div>
  );
};

export default AddItem;
