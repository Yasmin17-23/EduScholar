import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
  return (
    <div className="font-figtree">
      <Navbar />
      <div className="min-h-[calc(100vh-275.06px)] max-w-7xl mx-auto mt-24 px-4 md:px-6 py-4 md:py-8">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
