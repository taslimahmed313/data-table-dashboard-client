import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AddUser from "../../Pages/Dashboard/AddUser/AddUser";
import UpdateUser from "../../Pages/Dashboard/UpdateUser/UpdateUser";
import UserList from "../../Pages/Dashboard/UserList/UserList";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Shared/Authentication/Login/Login";
import Signup from "../../Pages/Shared/Authentication/Signup/Signup";
import AdminRouter from "../AdminRoute/AdminRoute";
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
        element: (
          <AdminRouter>
            <UserList></UserList>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/updateUser/:id",
        element: (
          <AdminRouter>
            <UpdateUser></UpdateUser>
          </AdminRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allUser/${params.id}`),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <AdminRouter>
            <AddProduct></AddProduct>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/addUser",
        element: (
          <AdminRouter>
            <AddUser></AddUser>
          </AdminRouter>
        ),
      },
    ],
  },
]);