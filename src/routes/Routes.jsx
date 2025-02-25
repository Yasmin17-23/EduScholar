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
import AddScholarship from "../pages/Dashboard/Moderator/AddScholarship";
import ManageScholarships from "../pages/Dashboard/Moderator/ManageScholarships";
import AllReviews from "../pages/Dashboard/Moderator/AllReviews";
import AppliedScholarship from "../pages/Dashboard/Moderator/AppliedScholarship";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageReview from "../pages/Dashboard/Admin/ManageReview";


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
      },
      {
         path: 'add-scholarship',
         element: <AddScholarship/>
      },
      {
        path: 'manage-scholarships',
        element: <ManageScholarships/>
      },
      {
        path: 'all-reviews',
        element: <AllReviews/>
      },
      {
        path: 'applied-scholarship',
        element: <AppliedScholarship/>
      },
      {
        path: 'manage-users',
        element: <ManageUsers/>
      },
      {
        path: 'manage-reviews',
        element: <ManageReview/>
      }
    ]
  }
]);

export default router;
