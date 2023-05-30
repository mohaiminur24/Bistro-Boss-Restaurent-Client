import React, { useContext } from "react";
import { NavLink, json, useNavigate } from "react-router-dom";
import LoginWithSocial from "../../ShareAbleComponents/LoginWithSocial";
import { AuthContext } from "../../AuthContextLayout/AuthContextLayout";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { register, handleSubmit, reset } = useForm();
  const {handlecreateuser} = useContext(AuthContext);
  const navigate = useNavigate();
  const {loading} = useContext(AuthContext);
  
  const createuser = (data) =>{
    handlecreateuser(data.email, data.password)
    .then(res=>{
      updateProfile(res.user,{
        displayName: data.name,
        photoURL: data.photourl
      }).then(res=>{
        const user = {name: data.name, email: data.email, role:"user"}
        fetch(`http://localhost:5000/createnewuser?email=${data.email}`,{
          method: "POST",
          headers: {
            "content-type":"application/json"
          },
          body: JSON.stringify(user)
        }).then(res=>{
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'New user create successfully!',
            showConfirmButton: false,
            timer: 1500
          })
          reset();
          navigate('/');
        }).catch(error=>{
  
        });
      })
    
    }).catch(error=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.message}`,
      })
    });
  };

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center">
      <div className="w-11/12 mx-auto my-10 bg-slate-100 min-h-[calc(100vh-200px)] grid grid-cols-1 md:grid-cols-2 justify-center items-center p-10">
        <img
          className="w-4/5 mx-auto"
          src="https://lemonheaddesign.com/wp-content/uploads/2019/06/gdpr-login2-1.png"
          alt=""
        />

        <div className="w-4/5 mx-auto border p-10 rounded-md">
          <form onSubmit={handleSubmit(createuser)}>
            <h1 className="text-2xl font-bold text-center mb-5">Registration</h1>
            <div>
              <label htmlFor="email">Name</label>
              <input
                {...register("name", { required: true})}
                className="text-xs my-2 w-full text-gray-400 border block px-4 py-3 outline-none rounded-md"
                type="text"
                name="name"
                placeholder="Enter your Name"
              />
            </div>
            <div>
              <label htmlFor="email">Photo URL</label>
              <input
                {...register("photourl", { required: true})}
                className="text-xs my-2 w-full text-gray-400 border block px-4 py-3 outline-none rounded-md"
                type="text"
                name="photourl"
                placeholder="Enter your Photo URL"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                {...register("email", { required: true})}
                className="text-xs my-2 w-full text-gray-400 border block px-4 py-3 outline-none rounded-md"
                type="email"
                name="email"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label htmlFor="email">Password</label>
              <input
                {...register("password", { required: true})}
                className="text-xs my-2 w-full text-gray-400 border block px-4 py-3 outline-none rounded-md"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <input
              className="text-xs my-2 w-full mt-5 border block px-4 py-3 outline-none rounded-md bg-yellow-700 disabled:opacity-10 text-white"
              disabled={loading && true}
              type="submit"
              value="sign up"
            />
          </form>
          <div className="text-xs font-Inter text-yellow-700 mt-5 text-center">
            Already have an account? <NavLink to="/login">Login Account</NavLink>
          </div>
          <LoginWithSocial />
        </div>
      </div>
    </div>
  );
};

export default Registration;
