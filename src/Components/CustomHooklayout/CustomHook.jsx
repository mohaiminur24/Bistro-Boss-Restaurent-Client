import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContextLayout/AuthContextLayout";
import { useQuery } from "@tanstack/react-query";

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
    const {user} = useContext(AuthContext);
    const accessToken = localStorage.getItem('access-token')
        const { refetch ,data : cart =[] } = useQuery({
            queryKey: ['cart', user?.email],
            queryFn: async() =>{
                const res = await fetch(`http://localhost:5000/cartdata?email=${user.email}`,{
                    headers:{
                        authToken: `Bearer ${accessToken}`
                    }
                })
                return res.json();
            }   
          });
    
      return [cart, refetch];
};











export default FindMenuByCatagory;
export {cartdataload};