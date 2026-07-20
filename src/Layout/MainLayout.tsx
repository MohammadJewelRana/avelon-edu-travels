
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import ScrollToTop from "../shared/SCrollToTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
