import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import img from "./logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navber = () => {
  const [card , setCard] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/oderProduct')
        .then(res => res.json())
        .then(data => {
            setCard(data)
        })
    },[])
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/product">Product</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/categories">Categories</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/custom">Custom</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/blog">Blog</NavLink>{" "}
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-slate-200 text-black font-bold ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img
            src={img}
            className="h-11 ml-2 bg-blue-500 rounded-full p-1"
            alt=""
          />
          <a className="font-bold ml-1 text-4xl">
            Furni<span className="text-blue-500">Flex</span>{" "}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <button className=" flex font-bold text-2xl mr-5">
            <Link to="/oderProduct"><HiOutlineShoppingBag /></Link>
            <div className="badge badge-secondary ">+{card.length}</div>
          </button>

          <div>
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10  ring ring-black rounded-full">
                      <img className="" alt="User Image" src={user?.photoURL} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      {" "}
                      <p className="py-2">{user?.displayName}</p>
                    </li>
                    <li>
                      <button onClick={logOut} className=" py-3  text-center bg-black text-white ">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Link to="/login">
                <button className=" btn font-bold text-2xl mr-5">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
