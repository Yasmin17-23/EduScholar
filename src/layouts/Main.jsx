import { Outlet } from "react-router"
import Navbar from "../components/shared/Navbar/Navbar"


const Main = () => {
  return (
    <div className="max-w-7xl mx-auto  md:py-8">
         <Navbar/>
        <div>
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Main