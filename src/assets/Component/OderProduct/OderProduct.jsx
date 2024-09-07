import { useLoaderData } from "react-router-dom";
import Product from "./Products";
import { FaEuroSign } from "react-icons/fa";




const OderProduct = () => {
    const product = useLoaderData();
    //console.log(product)
    return (
        <div className="p-20 flex">
            <div className="w-3/5 mx-5">
                <h1 className="text-2xl font-bold">An overview of your order</h1>
               
                <div className="mt-10 space-y-2">
                {
                    product.map(products => <Product key={products._id} products={products}></Product>)
                }
                </div>
            </div>
            <div className="w-1/5 mx-5">
                <h1 className="text-2xl font-bold">Oder details</h1>
                
                <div className="bg-slate-200 mt-10 rounded-md p-4"> 
                    <div className="flex items-start justify-between">
                        <h1>Subtotal</h1>
                        <h1>5419</h1>
                    </div>
                    <div className="flex items-start justify-between">
                        <h1>Shipping</h1>
                        <h1>free</h1>
                    </div>
                    <div className="flex items-start justify-between">
                        <h1 >Estimated Tax</h1>
                        <h1 className="flex items-center space-x-1"><FaEuroSign/> - </h1>
                    </div>
                    <h1>------------------------------------</h1>

                    <div className="flex items-start justify-between font-extrabold ">
                        <h1>Total</h1>
                        <h1 className="flex items-center space-x-1"><FaEuroSign/> 4548</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OderProduct;