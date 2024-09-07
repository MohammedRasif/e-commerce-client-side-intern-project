import React, { useContext } from "react";
import { FaEuroSign } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Swal from "sweetalert2";

const ShowProduct = ({ item }) => {
  const { user } = useContext(AuthContext);  // Get user from AuthContext
  const navigate = useNavigate();  // useNavigate hook for navigation
  const adderMail = user?.email;

  const { title, name, img, old_price, discount_price, description } = item;

  const handleProduct = async (item) => {
    if (!user) {
      // If user is not logged in, redirect to the login page
      Swal.fire({
        title: "You are not logged in!",
        text: "Please log in to add products to your cart.",
        icon: "warning",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");  // Navigate to login page
        }
      });
      return;
    }

    // If user is logged in, proceed with adding the product to the cart
    const productItem = {
      email: adderMail,
      name: item.name,
      title: item.title,
      price: parseFloat(item.discount_price),
      description: item.description,
      img: item.img,
    };

    fetch("http://localhost:5000/oderProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your order has been added to the cart successfully.",
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
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-5 pt-5">
          <img src={img} className="rounded-md h-60" alt={name} />
        </figure>
        <div className="p-5 items-center">
          <h2 className="text-start text-[18px] font-semibold">{name}</h2>
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
              onClick={() => handleProduct(item)} // Handle add to cart or redirect
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
