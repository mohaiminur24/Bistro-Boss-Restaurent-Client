import React from "react";
import SectionTitle from "../../../ShareAbleComponents/SectionTitle";
import { cartdataload } from "../../../CustomHooklayout/CustomHook";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../CustomHooklayout/useAxiosSecure";

const MyCart = () => {
    const [cart, refetch] = cartdataload();
    const totalprice = cart.reduce((prev,current)=>prev+ current.price , 0);
    const axiosSecure = useAxiosSecure();

    const deleteitems = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/deletecartitems?id=${id}`)
              .then(res=>{
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                );
                refetch();
              })
              
            }
          })
    }
  return (
    <div>
      <SectionTitle heading="Wanna Add More?" subheading="My Cart" />
      <div className="w-11/12 mx-auto bg-gray-50 p-5 rounded-md">
        <div className="flex justify-between text-lg items-center font-Cinzel font-bold">
          <h1>Total Order: {cart.length}</h1>
          <h1>Total Price: ${totalprice}</h1>
          <h1>
            <button className="px-4 py-2 bg-yellow-600 rounded-md text-sm text-white">
              Pay
            </button>
          </h1>
        </div>
        <div className="mt-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead className="bg-yellow-600 text-white">
                <tr className="bg-transparent">
                  <th className="bg-transparent"></th>
                  <th className="bg-transparent">Image</th>
                  <th className="bg-transparent">Item Name</th>
                  <th className="bg-transparent">Price</th>
                  <th className="bg-transparent">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                    cart && cart.map((food,index)=><tr>

                    <th className="text-sm font-normal">{index+1}</th>
                    <td><img className="w-20 shadow-md rounded-md border p-1 h-16" src={food.image} alt="" /></td>
                    <td className="font-semibold">{food.name}</td>
                    <td>${(food.price).toFixed(2)}</td>
                    <td className="text-center"><button onClick={()=>deleteitems(food._id)} className="p-3 text-white rounded-md shadow-md bg-red-700"><FaTrashAlt/></button></td>

                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
