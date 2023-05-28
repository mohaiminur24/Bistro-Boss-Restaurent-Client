import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginWithSocial from "../../ShareAbleComponents/LoginWithSocial";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { Toaster, toast } from "react-hot-toast";
import { AuthContext } from "../../AuthContextLayout/AuthContextLayout";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const LoginPage = () => {
    const [disablelogin, setDisableLogin] = useState(true);
    const [captcha, setCaptcha] = useState(null);
    const {handleloginuser} = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[]);

    useEffect(()=>{
        if(validateCaptcha(captcha, false)==true){
            setDisableLogin(false);
        };
    },[captcha])

    const Loginuser = event =>{
      console.log(event);
      handleloginuser(event.email, event.password)
      .then(res=>{
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
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`,
        })
      })
    }

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center">
        <div><Toaster/></div>
      <div className="w-11/12 mx-auto my-10 bg-slate-100 min-h-[calc(100vh-200px)] grid grid-cols-1 md:grid-cols-2 justify-center items-center p-10">
        <img
          className="w-4/5 mx-auto"
          src="https://lemonheaddesign.com/wp-content/uploads/2019/06/gdpr-login2-1.png"
          alt=""
        />

        <div className="w-4/5 mx-auto border p-10 rounded-md">
          <form onSubmit={handleSubmit(Loginuser)}>
            <h1 className="text-2xl font-bold text-center mb-5">Login</h1>
            <div>
              <label htmlFor="email">Email</label>
              <input
                {...register("email", { required: true })}
                className="text-xs mt-2 w-full text-gray-400 border block px-4 py-3 outline-none rounded-md"
                type="text"
                name="email"
                placeholder="Enter your Email"
              />
              {errors.email && <span className="text-xs text-red-400">Email field is required</span>}
            </div>
            <div>
              <label htmlFor="email">Password</label>
              <input
                {...register("password", { required: true })}
                className="text-xs mt-2 w-full text-gray-400 border block px-4 py-3 outline-none rounded-md"
                type="text"
                name="password"
                placeholder="Enter your Email"
              />
              {errors.password && <span className="text-xs text-red-400">Password field is required</span>}
            </div>

            <div>
              <div className="border w-fit"><LoadCanvasTemplateNoReload/></div>
              <div className="flex justify-start items-center gap-3">
              <input onChange={(event)=>setCaptcha(event.target.value)} className="text-xs my-2 w-4/5 text-gray-400 border block px-4 py-3 outline-none rounded-md" type="text" name="captcha" placeholder="Type Captcha" />
              </div>
            </div>

            <input
              className="text-xs my-2 w-full mt-5 border block px-4 py-3 outline-none rounded-md bg-yellow-700 text-white disabled:opacity-25"
              type="submit"
              value="sign in"
              disabled={disablelogin}
            />
          </form>
          <div className="text-xs font-Inter text-yellow-700 mt-5 text-center">
            New here? <NavLink to="/registration">Create new Account</NavLink>
          </div>
          <LoginWithSocial />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
