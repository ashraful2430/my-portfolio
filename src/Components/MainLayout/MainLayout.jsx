import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <div className="h-[100vh-60px] mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;