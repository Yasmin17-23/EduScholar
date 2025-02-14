import { Outlet } from "react-router"
import Navbar from "../components/shared/Navbar/Navbar"


const Main = () => {
  return (
    <div>
         <Navbar/>
        <div>
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Main