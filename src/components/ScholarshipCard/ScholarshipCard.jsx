import PropTypes from "prop-types"
import { Link } from "react-router"


const ScholarshipCard = ({ scholarship }) => {
    
  return (
    <div className="relative p-4 rounded-xl overflow-hidden shadow-lg transition-transform 
    transform hover:scale-105 bg-amber-100/50 hover:shadow-2xl duration-300 md:w-[380px]">
        <div className="w-full h-[200px] relative ">
        <img src={scholarship?.university_image} alt="" 
         className="w-full h-full object-cover  rounded-t-xl" />
          <div className="absolute inset-0 bg-gradient-to-t 
          from-black/70 via-black/20 to-transparent"></div>
           <div className="absolute top-4 right-2 bg-rose-400 text-white text-xs 
           font-semibold px-3 py-2 rounded-lg shadow-md">
           Deadline: {scholarship?.application_deadline}
        </div>
        </div>
        <div className="p-4 bg-rose-200/90 rounded-b-xl">
            <h4 className="text-xl font-semibold text-gray-700">{scholarship?.university_name}</h4>
            <p className="text-sm text-gray-600 mt-1 font-bold">{scholarship?.scholarship_category}</p>
            <Link to={`/scholarship/${scholarship?._id}`}>
               <button className="mt-2 px-5 py-2 bg-rose-300/90 text-white font-semibold 
               rounded-lg shadow-md hover:bg-rose-700 transition-all duration-300">
                Details Info
              </button>
            </Link>
        </div>
    </div>
  )
}

ScholarshipCard.propTypes = {
  scholarship: PropTypes.object,
}
export default ScholarshipCard