import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LoginWithSocial from "../../ShareAbleComponents/LoginWithSocial";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { Toaster, toast } from "react-hot-toast";

const LoginPage = () => {
    const [disablelogin, setDisableLogin] = useState(true);
    const [captcha, setCaptcha] = useState(null);

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[]);

    useEffect(()=>{
        if(validateCaptcha(captcha, false)==true){
            setDisableLogin(false);
        };
    },[captcha])


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
          <form>
            <h1 className="text-2xl font-bold text-center mb-5">Login</h1>
            <div>
              <label htmlFor="email">Email</label>
              <input
                className="text-xs my-2 w-full text-gray-400 border block px-4 py-3 outline-none rounded-md"
                type="text"
                name="phone"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label htmlFor="email">Password</label>
              <input
                className="text-xs my-2 w-full text-gray-400 border block px-4 py-3 outline-none rounded-md"
                type="text"
                name="phone"
                placeholder="Enter your Email"
              />
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
