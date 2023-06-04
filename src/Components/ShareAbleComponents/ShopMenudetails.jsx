import React, { useContext } from 'react';
import { AuthContext } from '../AuthContextLayout/AuthContextLayout';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { cartdataload } from '../CustomHooklayout/CustomHook';
import useAxiosSecure from '../CustomHooklayout/useAxiosSecure';

const ShopMenudetails = ({data}) => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch] = cartdataload();
  const axiosSecure = useAxiosSecure();

  const additems= (item)=>{
    if(user){
      const userEmail = user.email;
      const cartItem = {name:item.name,image:item.image,price:item.price,category: item.category,recipe:item.recipe,userEmail};
      axiosSecure.post("/usercart",cartItem).then(res=>{
        toast.success('Successfully Added in your Cart!');
        refetch();
      }).catch(error=>{
        toast.error(error.message);
      })
    }else{
      Swal.fire(
        'Login Account!',
        'Create Account First',
        'question'
      );
        navigate("/login",{state:{from:location}});
    }
    

  }

    return (
        <div className="bg-base-100 shadow-xl">
          <div><Toaster/></div>
        <figure>
          <img
            className="w-full h-64"
            src={data.image}
          />
        </figure>
        <div className="text-center p-5 font-Inter space-y-2">
          <h2 className="text-lg font-bold">{data.name}</h2>
          <p className="text-xs">{data.recipe}</p>
          <div className="text-center">
            <button onClick={()=>additems(data)} className="bg-gray-200 px-4 py-2 border-b-2 border-b-yellow-700 rounded-md text-sm hover:bg-yellow-700 hover:text-white mt-5 border">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default ShopMenudetails;