import React, { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { AuthContext } from "../AuthContextLayout/AuthContextLayout";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const LoginWithSocial = () => {
  const { loginwithgoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const loginbygoogle = () => {
    loginwithgoogle()
      .then((res) => {
        const data = res.user;
        const user = { name: data.name, email: data.email, role: "user" };
        fetch(`http://localhost:5000/createnewuser?email=${data.email}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        });
        
        Swal.fire({
            position: "top",
            icon: "success",
            title: "New user create successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from);
      })
      .catch((error) => {
        Swal.fire({
            position: "top",
            icon: "error",
            title: "Something went wrong!",
            showConfirmButton: false,
            timer: 1500,
          });
      });
  };
  return (
    <div className="my-5">
      <h1 className="text-xs font-bold text-center">Or Sign in With</h1>
      <div className="flex gap-3 text-sm justify-center mt-4">
        <button
          onClick={loginbygoogle}
          className="p-2 border rounded-full flex items-center gap-3"
        >
          <BsGoogle />
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default LoginWithSocial;
