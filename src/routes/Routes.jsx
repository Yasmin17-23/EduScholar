import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import AllScholarship from "../pages/AllScholarship/AllScholarship";
import ScholarshipDetails from "../pages/ScholarshipDetails/ScholarshipDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/scholarship/:id",
        element: <PrivateRoute><ScholarshipDetails/></PrivateRoute>
      },
      {
        path: "/all-scholarship",
        element: <AllScholarship/>
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
]);

export default router;
