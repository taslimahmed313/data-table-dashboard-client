import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import DataTable from "../../Pages/Dashboard/DataTable/DataTable";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard",
                element: <DataTable></DataTable>
            }
        ]
    }
])