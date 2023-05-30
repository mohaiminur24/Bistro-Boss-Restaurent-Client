import React, { useEffect, useState } from "react";
import SectionTitle from "../../../ShareAbleComponents/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";

const Alluser = () => {
        const [users, setusers] = useState(null);
        useEffect(()=>{
            fetch("http://localhost:5000/getallusers").then(res=>res.json())
            .then(data=>setusers(data));
        },[]);

  return (
    <div>
      <SectionTitle heading="manage all users" subheading="How Many" />
      <div className="w-11/12 mx-auto bg-gray-50 p-5 rounded-md">
        <div className="flex justify-between text-lg items-center font-Cinzel font-bold">
          <h1>Total user = {users?.length}</h1>
        </div>
        <div className="mt-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead className="bg-yellow-600 text-white">
                <tr className="bg-transparent">
                  <th className="bg-transparent"></th>
                  <th className="bg-transparent">name</th>
                  <th className="bg-transparent">Email</th>
                  <th className="bg-transparent">Role</th>
                  <th className="bg-transparent"></th>
                </tr>
              </thead>
              <tbody>
                {users && users.map((user,index)=><tr>
                  <th className="text-sm font-normal">{index+1}</th>
                  <td className="font-semibold">{user.name}</td>
                  <td className="font-semibold">{user.email}</td>
                  <td>{user?.role || "user"}</td>
                  <td className="text-center flex gap-5 justify-end">
                    {user?.role !== "admin" && <button className="text-sm px-3 py-2 bg-indigo-600 text-white rounded-md">Make Admin</button> }
                    <button className="p-3 text-white rounded-md shadow-md bg-red-700">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>)}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alluser;
