import { GoChevronRight } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "./logo.png"
import usa from "./usa.svg";
const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="footer text-[17px] text-white text-base-content mx-3 lg:px-20 py-10">
        <aside>
          <div className="flex items-center space-x-1">
          <img src={logo} className="h-10" alt="" />
            <h1 className="text-4xl">
              Furni<span className="text-blue-500">Flex</span>{" "}
            </h1>
          </div>
          
        </aside>
        <nav>
          <h6 className="text-2xl font-semibold">About US</h6>
          <a className="link link-hover">Master Plan</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Invest</a>
          <a className="link link-hover">Pressroom</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="text-2xl font-semibold">Explore EEVE</h6>
          <a className="link link-hover">Unlock my Robot Power</a>
          <a className="link link-hover">Starlight</a>
          <a className="link link-hover"> Robot Platform</a>
          <a className="link link-hover">EEVE Roadmap</a>
        </nav>
        <nav>
          <h6 className="text-2xl font-semibold">Community & Support</h6>
          <a className="link link-hover">Willow X Community</a>
          <a className="link link-hover">Developer & Maker Accesss</a>
          <a className="link link-hover">Special Cases</a>
        </nav>
      </footer>
      {/* ------------------------------------------------------------------------------------------------- */}
      <hr />

      <div className="p-10 flex lg:flex-row flex-col items-center justify-between">
        <div className="flex items-center mb-2">
          <button className="text-[19px] p-2 rounded-full text-white">
            <FaFacebookF />
          </button>
          <button className="text-[19px] p-2 rounded-full text-white">
            <FaXTwitter />
          </button>
          <button className="text-[19px] p-2 rounded-full text-white">
            <FaLinkedinIn />
          </button>
          <button className="text-[19px] p-2 rounded-full  text-white">
            <FaTelegramPlane />
          </button>
        </div>
        <div className="flex items-center text-white space-x-5">
          <a href="">March22Recap</a>
          <a href=""> Privacy Policy</a>
          <a href=""> General Terms</a>
          <a href="">Contact</a>
        </div>
        <div className="text-white flex items-center space-x-1">
          <img src={usa} className="h-3 " alt="" />
          <h1>United States (English)</h1>
        </div>
      </div>
      <h1 className="text-center text-slate-300 pb-5">EEVE © 2024. All rights reserved.</h1>
    </div>
  );
};

export default Footer;
