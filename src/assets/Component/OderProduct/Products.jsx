import { useState } from "react";
import { FaEuroSign } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";

const Products = ({products}) => {
    const {email,name,title,price,description,img,_id} =products
    const handleDelete = (_id) => {
        //console.log(_id)
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/oderProduct/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                //console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
              });
          }
        });
      };
    return (
        <div>
           <div className="flex bg-slate-200 items-center rounded-md mr-20 justify-between">
               <div className="flex items-center">
               <div className="flex items-center space-x-1 border-2 mx-5  border-gray-400 my-7">
                <button className="px-1">-</button>
                <h1>1</h1>
                <button className="px-1">+</button>
                </div>
                <div className="my-1">
                    <img src={img} className="h-14 w-14 rounded-md " alt="" />
                </div>
               </div>
               <div className="mr-5 ">
                <button onClick={() => handleDelete(_id)} className="text-3xl border-gray-400 px-2 py-1 mb-3 ml-4"><TiDeleteOutline/></button>
                <div className="flex items-center space-x-1">
                 <FaEuroSign/>
                    <h1 className="font-semibold ml-1">{price}</h1>
                </div>
               </div>
               </div>
        </div>
    );
};

export default Products;