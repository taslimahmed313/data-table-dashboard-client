import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Pages/Dashboard/Sidebar/Sidebar';
import "./DashboardLayout.css";

const DashboardLayout = () => {
    
    return (
      <div id='dashboard-layout'>
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
    );
};

export default DashboardLayout;