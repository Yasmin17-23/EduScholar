import { useState } from "react";
import { Link } from "react-router";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { AiOutlineBars } from "react-icons/ai";
import useRole from "../../../hooks/useRole";
import MenuItem from "./AllMenuItem/MenuItem";
import UserItem from "./AllMenuItem/UserItem";
import ModeratorItem from "./AllMenuItem/ModeratorItem";
import AdminItem from "./AllMenuItem/AdminItem";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const [role] = useRole();
  console.log(role)

  const toggleHandle = () => {
     setIsActive(!isActive);
  }

  return (
    
    <>
     {/* small device navbar */}
     <div className="flex justify-between bg-rose-100 p-4 text-gray-500 md:hidden">
      
        <div className="flex items-center md:gap-0 ">
          <Link to="/">
            <img
              src="https://i.ibb.co.com/VWnPQz0w/logo.png"
              alt="logo"
              width="70px"
              height="70px"
            />
          </Link>
          <h2 className="text-2xl font-bold font-script text-blue-900/100">
            Edu<span className="text-yellow-800">Scholar</span>
          </h2>
          </div>
       
      
      <button
          onClick={toggleHandle}
          className='mobile-menu-button p-4 cursor-pointer focus:outline-none focus:bg-rose-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
     </div>
     {/* sidebar layout */} 
      <div className={`md:fixed flex flex-col justify-between overflow-x-hidden z-10 md:translate-x-0  transition 
      duration-200 bg-rose-50 w-64 px-2 py-4 ease-in-out absolute inset-y-0 left-0 transform 
       ${isActive && '-translate-x-full'}`}>
      <div>
        <div className="hidden md:flex items-center md:gap-0">
          <Link to="/">
            <img
              src="https://i.ibb.co.com/VWnPQz0w/logo.png"
              alt="logo"
              width="90px"
              height="90px"
            />
          </Link>
          <h2 className="text-3xl font-bold font-script text-blue-900/100">
            Edu<span className="text-yellow-800">Scholar</span>
          </h2>
          </div>
          <div className="flex flex-col justify-between mt-8 flex-1">
            { /* My Profile */}
            <MenuItem label='My Profile' address='/dashboard' icon={CgProfile}/>
            <hr className="text-amber-200 mb-10" />
        
         </div>
         </div>
          {/* Nav items */}
         <div className="flex flex-col justify-between ">
         <div>
            <nav>
            { role === 'user' && <UserItem/>}
            { role === 'moderator' && <ModeratorItem/>}
            { role === 'admin' && <AdminItem/>}
            </nav>
            <hr className="text-amber-200 mb-10" />
          </div>
        
        <div className="mt-16">
        <button className="flex w-full hover:bg-rose-200 px-2 py-3 rounded-sm  hover:text-gray-500
         text-gray-700 items-center transition-colors duration-500 transform">
          <CiLogout className="w-6 h-6 mr-2 text-rose-400"/>
          <span className="font-semibold">LogOut</span>
        </button>
        </div>
         </div>
        
      </div>
    
   </>
  );
};

export default Sidebar;
