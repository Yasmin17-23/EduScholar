import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth"
import PropTypes from "prop-types";
import LoadingSpinner from "../components/shared/LoadingSpinner/LoadingSpinner";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading) return <LoadingSpinner/>

    if(user) {
        return children;
    }
  return <Navigate to='/login' state={location.pathname} replace='true' />
}

PrivateRoute.propTypes = {
    children: PropTypes.element,
}

export default PrivateRoute