import axios from "axios"
import useAuth from "./useAuth";
import { useNavigate } from "react-router";


const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})
const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    // request interceptor to add authorization header for every secure call
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token-access')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    //interceptors for 401 & 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        //401 and 403 status happen user logout the web and move to the user login page
        if(status === 401 || status ==403){
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error)
    })
    
   return axiosSecure
}

export default useAxiosSecure