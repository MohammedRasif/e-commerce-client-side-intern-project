import { useState, useEffect } from "react";
import { FaEuroSign } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";

const Products = ({ products, updateSubtotal }) => {
  const { email, name, title, price, description, img, _id } = products;

  // State for managing quantity
  const [quantity, setQuantity] = useState(1);

  // Update subtotal when the component mounts (initial price * quantity)
  useEffect(() => {
    updateSubtotal(price * quantity);
    // Remove the product price from subtotal on component unmount
    return () => {
      updateSubtotal(-(price * quantity));
    };
  }, []);

  // Function to increase the quantity
  const incrementQuantity = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      updateSubtotal(price); // Increase the subtotal by price
      return newQuantity;
    });
  };

  // Function to decrease the quantity, ensuring it doesn't go below 1
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => {
        const newQuantity = prevQuantity - 1;
        updateSubtotal(-price); // Decrease the subtotal by price
        return newQuantity;
      });
    }
  };

  // Function to handle product deletion
  const handleDelete = (_id) => {
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
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
              });
              updateSubtotal(-(price * quantity));
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="flex bg-slate-200 items-center rounded-md mr-20 justify-between">
        <div className="flex items-center">
          {/* Product quantity */}
          <div className="flex items-center space-x-1 border-2 mx-5 border-gray-400 my-7">
            <button onClick={decrementQuantity} className="px-1">-</button>
            <h1>{quantity}</h1>
            <button onClick={incrementQuantity} className="px-1">+</button>
          </div>
          <div className="my-1">
            <img src={img} className="h-14 w-14 rounded-md" alt={name} />
          </div>
        </div>
        <div className="mr-5">
          <button onClick={() => handleDelete(_id)} className="text-3xl border-gray-400 px-2 py-1 mb-3 ml-4">
            <TiDeleteOutline />
          </button>
          <div className="flex items-center space-x-1">
            <FaEuroSign />
            <h1 className="font-semibold ml-1">{price * quantity}</h1> {/* Show price for current quantity */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
