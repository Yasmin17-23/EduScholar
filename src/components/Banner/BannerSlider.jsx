import PropTypes from "prop-types"
import { Link } from "react-router"


const BannerSlider = ({ image, text }) => {
  return (
    <div className="w-full bg-center bg-cover h-[36rem] rounded-xl" 
    style={{
        backgroundImage: `url(${image})`,
    }}>
    <div className="flex items-center justify-center w-full h-full bg-gray-900/60 rounded-xl">
        <div className="text-center">
            <h1 className="text-xl md:text-3xl font-semibold text-white lg:text-4xl lg:mb-5">
                {text}
            </h1>
            <br />
            <Link
              className="w-full px-3 md:px-5 py-4 mt-4 text-md font-semibold text-white 
               capitalize transition-colors duration-300 transform bg-rose-400 rounded-md
                lg:w-auto hover:bg-rose-700 focus:outline-none focus:bg-blue-500">
                    Scholarship Information
                </Link>
        </div>
    </div>
   </div>
  )
}

BannerSlider.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
}
export default BannerSlider