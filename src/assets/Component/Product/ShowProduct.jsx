import React, { useContext } from "react";
import { FaEuroSign } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const ShowProduct = ({ item }) => {
  const { user } = useContext(AuthContext);
  const adderMail = user?.email;

  const { title, name, img, old_price, discount_price, description } = item;
  //console.log(item)
  const handleProduct = async (item) => {
    const productItem = {
      email: adderMail,
      name: item.name,
      title: item.title,
      marks: parseFloat(item.discount_price),
      description: item.description,
      img: item.img,
    };
    console.log(productItem);

    fetch("http://localhost:5000/oderProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your oder Add to cart successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-5 pt-5">
          <img src={img} className="rounded-md h-60  " />
        </figure>
        <div className="p-5 items-center ">
          <h2 className=" text-start text-[18px] font-semibold">{name}</h2>
          <div className="flex items-center space-x-2 my-2">
            <div className="flex items-center">
              <FaEuroSign />
              <h1 className="font-semibold text-xl">{discount_price}</h1>
            </div>
            <div className="flex items-center text-slate-400">
              <FaEuroSign />
              <s>
                <h1 className="font-semibold text-xl text-slate-400">
                  {old_price}
                </h1>
              </s>
            </div>
            <div className="font-semibold text-xl">
              <h1>30% OFF</h1>
            </div>
          </div>
          <p className="text-start text-sm py-2">{description}</p>
          <div className="card-actions my-2">
            <button
              onClick={() => handleProduct(item)}
              className="btn btn-primary bg-black w-full hover:bg-slate-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
