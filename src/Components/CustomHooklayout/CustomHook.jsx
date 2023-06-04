import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContextLayout/AuthContextLayout";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const FindMenuByCatagory = (catagory)=>{
        const [menu, setMenu] = useState(null);
        useEffect(()=>{
            fetch("http://localhost:5000/allmenusdetails").then(res=>res.json()).then(data=>{ 
                const filter = data.filter(mn=> mn.category === catagory);
                setMenu(filter);
            });
        },[])
        return [menu];
};

// load cart data funtion is here
const cartdataload = () =>{
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const { refetch , data : cart =[] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/cartdata?email=${user.email}`)
            return res.data;
        }   
        });
    return [cart, refetch];
};


//user admin or not function is here
const useAdmin = ()=>{
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [isAdmin, setAdmin] = useState(false);
    const [adminloading, setAdminLoading] = useState(true);
    useEffect(()=>{
        if(!user?.email){
            return;
        };
        axiosSecure.get(`/singleuser?email=${user.email}`)
        .then(res=> {
            if(res.data.role === "admin"){
                setAdmin(true);
                setAdminLoading(false)
            };
        });
    },[user?.email])

    return [isAdmin,adminloading];
};










export default FindMenuByCatagory;
export {cartdataload,useAdmin};