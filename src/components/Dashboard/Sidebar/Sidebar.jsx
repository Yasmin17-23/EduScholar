import { useState } from "react";
import { Link, NavLink } from "react-router";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { MdReviews } from "react-icons/md";
import { MdApps } from "react-icons/md";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="bg-rose-50 w-64 px-2 py-4 flex flex-col justify-between items-center">
      <div className="flex flex-col justify-between overflow-hidden">
      <div>
        <div className="flex items-center md:gap-0">
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
          <div className="flex flex-col justify-between space-y-6">
            <NavLink
              to="/dashboard"
              className={({
                isActive
              }) => `p-2 flex items-center transition-colors my-5
              duration-500 transform rounded-sm hover:bg-rose-200 hover:text-gray-500
              ${isActive ? "bg-rose-200 text-gray-500" : "text-gray-700"}`}
            >
              <CgProfile className="w-6 h-6 mr-2 text-rose-400" />
              <span className="font-semibold">My Profile</span>
            </NavLink>
            <hr className="text-amber-200 mb-10" />
        
         </div>
         </div>
          {/* Nav items */}
         <div className="flex flex-col justify-between ">
         <div>
            <nav>
              <NavLink
                to="/dashboard/my-application"
                className={({
                  isActive
                }) => `p-2 flex items-center transition-colors my-5
              duration-500 transform rounded-sm hover:bg-rose-200 hover:text-gray-500
              ${isActive ? "bg-rose-200 text-gray-500" : "text-gray-700"}`}
              >
                
                <MdApps className="w-6 h-6 mr-2 text-rose-400" />
                <span className="font-semibold">My Application</span>
              </NavLink>
              <NavLink
                to="/dashboard/my-reviews"
                className={({
                  isActive
                }) => `p-2 flex items-center transition-colors my-5
              duration-500 transform rounded-sm hover:bg-rose-200 hover:text-gray-500
              ${isActive ? "bg-rose-200 text-gray-500" : "text-gray-700"}`}
              >
               
                <MdReviews className="w-6 h-6 mr-2 text-rose-400" />
                <span className="font-semibold">My Reviews</span>
              </NavLink>
            </nav>
            <hr className="text-amber-200 mb-10" />
          </div>
        
        <div className="mt-20">
        <button className="flex w-full hover:bg-rose-200 px-2 py-3 rounded-sm  hover:text-gray-500
         text-gray-700 items-center transition-colors duration-500 transform">
          <CiLogout className="w-6 h-6 mr-2 text-rose-400"/>
          <span className="font-semibold">LogOut</span>
        </button>
        </div>
         </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
