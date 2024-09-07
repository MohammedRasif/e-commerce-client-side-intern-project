import img from "./icon.png";
import google from "./4LSMF-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const SignIn = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const first = form.first.value;
    const last = form.last.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await createUser(email, password, first, last);
      console.log(result);

      navigate("/");
      toast.success("SignUp Successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
      toast.success("SignUp Successful");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex ">
      <div className="lg:w-1/2  mt-24 ml-56 ">
        <div className="px-7 py-10  mr-64 rounded-md bg-slate-200">
          <h1 className="text-xl text-center  font-semibold">Welcome Back!</h1>
          <a className="font-bold pl-20 ml-1 text-4xl">
            Furni<span className="text-blue-500">Flex</span>{" "}
          </a>
          <p className=" text-center mb-4 text-sm">
            Enter your Credentials to access your account
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="">Email Address</span>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="first"
                    className=" bg-white input rounded-none input-bordered w-full max-w-xs"
                  />
                  <input
                    type="text"
                    placeholder="Last  email"
                    name="last"
                    className=" bg-white input rounded-none input-bordered w-full max-w-xs"
                  />
                </div>
              </label>
            </div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="">Email Address</span>
              </div>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                className=" bg-white input rounded-none input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="">Password</span>
              </div>
              <input
                type="text"
                name="password"
                placeholder="Enter your password"
                className="input mb-4 bg-white rounded-none input-bordered w-full max-w-xs"
              />
            </label>
            <div className="flex space-x-1 items-center">
              <input
                type="checkbox"
                defaultChecked
                className=" border-2 border-black size-4"
              />
              <h1> I agree to the Terms & Policy</h1>
            </div>

            <button className="w-full mt-5 text-white py-3 rounded-md bg-black">
              {" "}
              Sign in
            </button>
            <hr />
          </form>
          <div className=" justify-center space-x-2">
            <button onClick={handleGoogleSignIn}>
              {" "}
              <img src={google} className="h-24 ml-14" alt="" />
            </button>
          </div>

          <h1>
            Already have a account? please{" "}
            <Link to="/login">
              <a href="" className="text-violet-500">
                Login
              </a>
            </Link>
          </h1>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div
          className="hero h-[900px] min-w-full"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/HpDxYYG/chris-lee-70l1t-DAI6r-M-unsplash-1.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md ">
              <img
                src={img}
                className="lg:ml-44  mb-5 text-5xl font-bold"
                alt=""
              />
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

export default SignIn;
