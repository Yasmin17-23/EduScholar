import PropTypes from "prop-types"
import { NavLink } from "react-router"


const MenuItem = ({ label, address, icon: Icon}) => {
  return (
    <NavLink
    to={address}
    end
    className={({
      isActive
    }) => `p-2 flex items-center transition-colors my-5
    duration-500 transform rounded-sm hover:bg-rose-200 hover:text-gray-500
    ${isActive ? "bg-rose-200 text-gray-500" : " text-gray-700"}`}
  >
    <Icon className="w-6 h-6 mr-2 text-rose-400" />
    <span className="font-semibold">{label}</span>
  </NavLink>
  )
}

MenuItem.propTypes = {
    label: PropTypes.string,
    address:  PropTypes.string,
    icon: PropTypes.elementType,
}

export default MenuItem