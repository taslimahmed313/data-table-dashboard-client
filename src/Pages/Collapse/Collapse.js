import React from 'react';
import { FaCartPlus, FaRegUser, FaTable } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./Collapse.css";

const Collapse = () => {

    function show() {
      document.getElementById("toggle").classList.toggle("active");
      document.getElementById("sidebar").classList.toggle("active");
    }
    function remove(e){
        if(e.target.id !== "sidebar" && e.target.id !=="toggle"){
            document.getElementById("toggle").classList.remove("active");
            document.getElementById("sidebar").classList.remove("active");
        }
    }
    return (
      <div>
        <div id="toggle" onClick={show}></div>
        <div id="sidebar" onClick={remove}>
          <ul>
            <li>
              <Link to="/dashboard">
                <FaTable className="table-icon"></FaTable> All Users
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addProduct">
                <FaCartPlus className="table-icon"></FaCartPlus> Add Product
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addUser">
                <FaRegUser className="table-icon"></FaRegUser> Add User
              </Link>
            </li>
            <li>
              <Link>Home</Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Collapse;