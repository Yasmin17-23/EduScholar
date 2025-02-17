import { Link } from "react-router";
import { AiOutlineMenu } from "react-icons/ai";
import avatarImg from "../../../assets/images/avatar-img.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky z-10 w-full">
       <div>
        <div>
          <div className="flex flex-row justify-between items-center sm:px-4">
            <div className="flex items-center md:gap-0">
              <Link>
                <img
                  src="https://i.ibb.co.com/VWnPQz0w/logo.png"
                  alt="logo"
                  width="100px"
                  height="100px"
                />
              </Link>
              <h2 className="text-3xl font-bold font-script text-blue-900/100">
                Edu<span className="text-yellow-800">Scholar</span>
              </h2>
            </div>

            <div className="relative">
              <div className="flex  items-center mr-5">
                <div className="mr-5 bg-amber-200/40 py-3 px-5 rounded-2xl text-amber-300/100 font-bold">
                  <Link>All Scholarship</Link>
                </div>
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-between bg-amber-200/40 
                  px-4 py-2 rounded-2xl text-amber-300/100"
                >
                  <AiOutlineMenu className="text-xl md:mr-2" />
                  <div className="hidden md:block">
                    <img
                      className="rounded-full  border-2 border-e-red-400/50"
                      referrerPolicy="no-referrer"
                      src={avatarImg}
                      alt=""
                      width="35px"
                      height="35px"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div
                  className="absolute rounded-xl shadow-md w-[30vw] md:w-[10vw] 
                   bg-amber-200/40 overflow-hidden right-0 top-14 text-sm text-center text-amber-700/100"
                >
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/"
                      className="px-4 py-3 hover:bg-amber-800/40 hover:text-white transition font-semibold"
                    >
                      Home
                    </Link>

                    <Link
                      to="/login"
                      className=" px-4 py-3 hover:bg-amber-800/40 hover:text-white transition font-semibold"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className=" px-4 py-3 hover:bg-amber-800/40 hover:text-white transition font-semibold"
                    >
                      Signup
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Navbar;
