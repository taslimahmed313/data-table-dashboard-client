import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AddUser from "../../Pages/Dashboard/AddUser/AddUser";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import UpdateUser from "../../Pages/Dashboard/UpdateUser/UpdateUser";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Shared/Authentication/Login/Login";
import Signup from "../../Pages/Shared/Authentication/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/updateUser/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allUser/${params.id}`),
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/addUser",
        element: <AddUser></AddUser>,
      },
    ],
  },
]);