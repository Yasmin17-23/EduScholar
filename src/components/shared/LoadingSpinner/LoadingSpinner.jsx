import PropTypes from "prop-types"
import { BounceLoader } from "react-spinners"


const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
    className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
    flex 
    flex-col 
    justify-center 
    items-center `}
  >
    <BounceLoader size={60} color='red' />
  </div>
  )
}

LoadingSpinner.propTypes = { 
    smallHeight: PropTypes.bool,
}

export default LoadingSpinner