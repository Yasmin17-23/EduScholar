import { Outlet } from "react-router"
import Navbar from "../components/shared/Navbar/Navbar"
import Footer from "../components/shared/Footer/Footer"


const Main = () => {
  return (
    <div className="font-figtree">
        <div  className="max-w-7xl mx-auto  md:py-8">
        <Navbar/>
        <div className="min-h-[calc(100vh-275.06px)]">
        <Outlet></Outlet>
        </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Main