import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import DataTable from "../../Pages/Dashboard/DataTable/DataTable";
import Edit from "../../Pages/Dashboard/Edit/Edit";
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
        element: <DataTable></DataTable>,
      },
      {
        path: "/dashboard/edit/:id",
        element: <Edit></Edit>,
        loader: ({params}) => fetch(`https://aide-task-server.vercel.app/data/${params.id}`),
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct></AddProduct>
      }
    ],
  },
]);