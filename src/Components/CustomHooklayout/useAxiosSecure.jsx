import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthContextLayout/AuthContextLayout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
    
    const {loggedoutuser} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        axiosSecure.interceptors.request.use(config=>{
            const token = localStorage.getItem('access-token');

            if(!token){
                return <progress className="progress w-56"></progress>;
            };

            
            if(token){
                config.headers.authtoken = `Bearer ${token}`;
            };
            return config;
        });

        axiosSecure.interceptors.response.use(response=>response, async error=>{
            if(error.response && (error.response.status === 401 || error.response.status === 403)){
                loggedoutuser().then(res=>{
                    navigate('/login');
                });
                return Promise.reject(error);
            }
        })

    },[loggedoutuser,axiosSecure,navigate]);


return axiosSecure;
};

export default useAxiosSecure;