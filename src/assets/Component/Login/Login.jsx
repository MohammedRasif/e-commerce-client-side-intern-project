import { useState } from "react";
import img from "./icon.png";
import google from "./4LSMF-removebg-preview.png"
import apply from "./apple-id-white-yes@2x.png"
const Login = () => {
    const [checkbox,setCheckbox] = useState()
    
  return (
    <div className="flex ">
      <div className="lg:w-1/2  mt-28 ml-56 ">

        <div className="px-7 py-10 mr-64 rounded-md bg-slate-200">
            <h1 className="text-4xl  font-semibold">Welcome Back!</h1>
            <p className="mb-4 text-sm">Enter your Credentials to access your account</p>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="">Email Address</span>
                </div>
                <input type="text" placeholder="Enter your email" className=" bg-white input rounded-none input-bordered w-full max-w-xs" />
                </label> 
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="">Password</span>
                </div>
                <input type="text" placeholder="Enter your password" className="input mb-4 bg-white rounded-none input-bordered w-full max-w-xs" />
                </label>  
                <div className="flex space-x-1 items-center">
                <input type="checkbox" defaultChecked className=" border-2 border-black size-4" />      
                <h1> I agree to the Terms & Policy</h1>
                </div>

                <button className="w-full mt-5 text-white py-3 rounded-md bg-black"> Sign in</button>
                <hr />
                <div className=" justify-center space-x-2">
                   <button> <img src={google} className="h-24 ml-14" alt="" /></button>
                </div>
                <h1>Have a new account <a href="" className="text-violet-500">Sign Up</a></h1>
            </div>







      </div>
      <div className="lg:w-1/2">

        <div
          className="hero min-h-screen min-w-full"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/HpDxYYG/chris-lee-70l1t-DAI6r-M-unsplash-1.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md ">
                <img src={img} className="lg:ml-44  mb-5 text-5xl font-bold" alt="" />
                <a className="font-bold mb-2 ml-1 text-4xl">
            Furni<span className="text-blue-500">Flex</span>{" "}
          </a>  
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
