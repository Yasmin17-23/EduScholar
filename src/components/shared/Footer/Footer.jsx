import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300/90 w-full px-10 py-3">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex flex-row items-center">
          <img
            src="https://i.ibb.co.com/VWnPQz0w/logo.png"
            alt="logo"
            width="80px"
            height="80px"
          />
          <h2 className="text-xl font-bold font-script text-blue-900/100">
            Edu<span className="text-yellow-800">Scholar</span>
          </h2>
        </div>
        <div className="text-center ">
          <h2 className="text-xl font-bold text-yellow-800">About</h2>
          <p className="text-sm">Scholarship Name</p>
          <p className="text-sm">University Name</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-yellow-800">Services</h2>
          <p className="text-sm">Scholarship Name</p>
          <p className="text-sm">University Name</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-yellow-800 md:mb-2">Social Media</h2>
          <div className="flex items-center space-x-3">
            <FaFacebook className="text-[#1877F2]"/>
            <FaLinkedin className="text-[#E1306C]"/>
            <FaTwitter className="text-[#1DA1F2]"/>
            <FaYoutube className="text-[#FF0000]"/>
          </div>
        </div>
      </div>
      <hr className="text-amber-200/90 my-3"/>
      <div className="text-center my-4">
         <p className="text-sm text-yellow-800/100">EduScholar © 2025 - All right reserved by EduScholar.</p>
      </div>
    </footer>
  );
};

export default Footer;
