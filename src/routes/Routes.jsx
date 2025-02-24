import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import AllScholarship from "../pages/AllScholarship/AllScholarship";
import ScholarshipDetails from "../pages/ScholarshipDetails/ScholarshipDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Dashboard/Common/Profile";
import MyApplication from "../pages/Dashboard/Common/Users/MyApplication";
import MyReviews from "../pages/Dashboard/Common/Users/MyReviews";


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
  {
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
      {
         index: true,
         element: <Profile/>
      },
      {
         path: 'my-application',
         element: <MyApplication/>
      },
      {
        path: 'my-reviews',
        element: <MyReviews/>
      }
    ]
  }
]);

export default router;
