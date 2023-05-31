import React, { useEffect, useState } from "react";
import SectionTitle from "../../../ShareAbleComponents/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Alluser = () => {
  const [users, setusers] = useState(null);
  const [loaduser, setLoaduser] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/getallusers")
      .then((res) => res.json())
      .then((data) => setusers(data));
  }, [loaduser]);

  const handleuseruserrole = (role, email) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to make him ${role}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `${role}`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/updateuserrole?email=${email}&role=${role}`,{
          method: "POST",
        }).then(res=> res.json())
        .then(data=>{
          if(data.modifiedCount){
            Swal.fire("success!", `this user make ${role}`, "success");
            setLoaduser(!loaduser);
          };
        }).catch(error=>{
          console.log(error.message)
        })
      }
    });
  };


  const handleuserdelete =(id)=>{
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
        fetch(`http://localhost:5000/deletesingleuser?id=${id}`,{method:"DELETE"}).then(res=>res.json())
        .then(data=>{
          if(data.deletedCount){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            setLoaduser(!loaduser);
          }
          
        });
      }
    })
  }

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
                {users &&
                  users.map((user, index) => (
                    <tr>
                      <th className="text-sm font-normal">{index + 1}</th>
                      <td className="font-semibold">{user.name}</td>
                      <td className="font-semibold">{user.email}</td>
                      <td>{user?.role || "user"}</td>
                      <td className="text-center flex gap-5 justify-end">
                        {user?.role !== "admin" ? (
                          <button
                            onClick={() =>
                              handleuseruserrole("admin", user.email)
                            }
                            className="text-sm px-3 py-2 bg-indigo-600 text-white rounded-md"
                          >
                            Make Admin
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              handleuseruserrole("user", user.email)
                            }
                            className="text-sm px-3 py-2 bg-yellow-800 text-white rounded-md"
                          >
                            Make User
                          </button>
                        )}
                        <button onClick={()=>handleuserdelete(user._id)} className="p-3 text-white rounded-md shadow-md bg-red-700">
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alluser;
