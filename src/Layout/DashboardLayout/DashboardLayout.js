import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Pages/Dashboard/Sidebar/Sidebar';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import "./DashboardLayout.css";

const DashboardLayout = () => {
    
    return (
      <div>
        <Navbar></Navbar>
        <div id="dashboard-layout">
          <Sidebar></Sidebar>
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default DashboardLayout;