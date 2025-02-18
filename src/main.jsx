
import ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider } from "react-router";
import router from "./routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer} from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}/>
    <ToastContainer/>
  </AuthProvider>
)
