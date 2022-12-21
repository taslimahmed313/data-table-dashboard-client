import React from 'react';
import { FaCartPlus, FaTable } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
    function show() {
      document.getElementById("sidebar").classList.toggle("active");
    }

      // function dropdown() {
      //   const accordion = document.getElementsByClassName("contentBox");

      //   for (let i = 0; i < accordion.length; i++) {
      //     accordion[i].classList.toggle("active")
      //   }
      // }
      // function dropdownTwo() {
      //   const accordion = document.getElementsByClassName("contentBox");

      //   for (let i = 0; i < accordion.length; i++) {
      //     accordion[i].classList.toggle("active")
      //   }
      // }
    

    return (
      <div>
        <div id="sidebar">
          <div className="toggle-btn" onClick={show}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* <div className="accordion">
            <div className="contentBox">
              <div className="label" onClick={dropdown}>
                Admin
              </div>
              <p className="content">
                <button>Data Table</button>
                <button>Add Product</button>
              </p>
            </div>
            <div className="contentBox">
              <div className="label" onClick={dropdownTwo}>
                USER
              </div>
              <p className="content">
                <p></p>
              </p>
            </div>
          </div> */}

          <div className="nav-menu">
            <Link to="/dashboard">
              <FaTable className="table-icon"></FaTable> Data Table
            </Link>
            <br />
            <Link to="/dashboard/addProduct">
              <FaCartPlus className="table-icon"></FaCartPlus> Add Product
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Sidebar;