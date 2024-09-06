import { Outlet } from "react-router-dom";
import Navber from "../assets/Component/Navber.jsx/Navber";
import Footer from "../assets/Component/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;