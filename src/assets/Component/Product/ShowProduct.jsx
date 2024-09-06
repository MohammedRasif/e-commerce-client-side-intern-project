import React from 'react';
import { FaEuroSign } from "react-icons/fa";


const ShowProduct = ({item}) => {
    const {title,name,img,old_price,discount_price,description} = item;
    console.log(item)
    const handleProduct = item =>{
        console.log(item)
    }
    return (
        <div>
             <div className="card bg-base-100  shadow-xl">
          <figure className="px-5 pt-5">
            <img
              src={img}
              className="rounded-md h-60  "
            />
          </figure>
          <div className="p-5 items-center ">
            <h2 className=" text-start text-[18px] font-semibold">{name}</h2>
            <div className='flex items-center space-x-2 my-2'>
                <div className='flex items-center'>
                <FaEuroSign/>
                <h1 className='font-semibold text-xl'>{discount_price}</h1>
                </div>
                <div className='flex items-center text-slate-400'>
                <FaEuroSign/>
                <s><h1 className='font-semibold text-xl text-slate-400'>{old_price}</h1></s>
                </div>
                <div className='font-semibold text-xl'>
                    <h1>30% OFF</h1>
                </div>
                
            </div>
            <p className='text-start text-sm py-2'>{description}</p>
            <div className="card-actions my-2">
              <button onClick={()=> handleProduct(item)} className="btn btn-primary bg-black w-full hover:bg-slate-800">Add to cart</button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default ShowProduct;