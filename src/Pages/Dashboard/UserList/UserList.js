import { useQuery } from '@tanstack/react-query';
import jsPDF from 'jspdf';
import "jspdf-autotable";
import React, { useRef, useState } from 'react';
import { CSVLink } from 'react-csv';
import { toast } from 'react-hot-toast';
import { BiDotsVertical } from 'react-icons/bi';
import { CiEdit, CiExport } from 'react-icons/ci';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import vector from "../../../assets/images/Vector (1).png";
import author from "../../../assets/images/Vector (2).png";
import maintainer from "../../../assets/images/Vector (3).png";
import subscriber from "../../../assets/images/Vector (4).png";
import computer from "../../../assets/images/Vector.png";
import "./UserList.css";

const UserList = () => {

  const ref = useRef();

  const [columnShow, setColumnShow] = useState({
    user: "user",
    email: "email",
    plan: "plan",
    role: "role",
    status: "status",
    action: "action",
  });

    const { data: users = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        try {
          const res = await fetch("http://localhost:5000/allUser");
          const data = res.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      },
    });

    const generatePDF = () => {
      const doc = new jsPDF();
      doc.autoTable({ html: "#dataTable" });
      doc.save("aide employee.pdf");
    };

    const handleDelete = (id) => {
      fetch(`http://localhost:5000/allUser/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Data Deleted Successfully !!");
            refetch();
          }
        });
    };

    const handleColumn = (data) => {
      setColumnShow({
        ...columnShow,
        [data.target.name]: data.target.value,
      });
    };

    function myFunction(event) {
      document.getElementById("myDropdown").classList.toggle("show");
      if (!event.target.matches("#dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdownContent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    }

   

    return (
      <div className="userList">
        <h1>User List</h1>

        <div id="table">
          <div className="exports-btn">
            <div className="csv">
              <CSVLink data={users} filename={"user-list.csv"} target="_blank">
                <div className="export-btn">
                  <CiExport></CiExport> EXCEL
                </div>
              </CSVLink>
            </div>
            <div onClick={generatePDF} className="export-btn">
              <CiExport></CiExport> PDF
            </div>
            <div>
              <ReactToPrint
                trigger={() => {
                  return (
                    <div className="export-btn">
                      <CiExport></CiExport> PRINT
                    </div>
                  );
                }}
                content={() => ref.current}
                documentTitle="Users List"
                pageStyle="print"
              ></ReactToPrint>
            </div>
            <div className="dropdown-column exports-btn">
              <label tabIndex={0} id="dropbtn" onClick={myFunction}>
                SHOW/HIDE COLUMN
              </label>
            </div>
            <div id="myDropdown" className="dropdownContent">
              <div>
                <label
                  htmlFor="user"
                  className="flex items-center pl-5 border-b py-1"
                >
                  <input
                    className=""
                    onClick={handleColumn}
                    type="checkbox"
                    name="user"
                    value={columnShow.user === "user" ? "" : "user"}
                    defaultChecked={columnShow.user === "user" ? true : false}
                  />
                  User
                </label>
                <label
                  htmlFor="email"
                  className="flex items-center pl-5 border-b py-1"
                >
                  <input
                    className=""
                    onClick={handleColumn}
                    type="checkbox"
                    name="email"
                    value={columnShow.email === "email" ? "" : "email"}
                    defaultChecked={columnShow.email === "email" ? true : false}
                  />
                  Email
                </label>
                <label
                  htmlFor="plan"
                  className="flex items-center pl-5 border-b py-1"
                >
                  <input
                    className=""
                    onChange={handleColumn}
                    type="checkbox"
                    name="plan"
                    value={columnShow.plan === "plan" ? "" : "plan"}
                    defaultChecked={columnShow.plan === "plan" ? true : false}
                  />
                  Plan
                </label>
                <label
                  htmlFor="role"
                  className="flex items-center pl-5 border-b py-1"
                >
                  <input
                    className=""
                    onChange={handleColumn}
                    type="checkbox"
                    name="role"
                    value={columnShow.role === "role" ? "" : "role"}
                    defaultChecked={columnShow.role === "role" ? true : false}
                  />
                  Role
                </label>
                <label
                  htmlFor="status"
                  className="flex items-center pl-5 border-b py-1"
                >
                  <input
                    className=""
                    onChange={handleColumn}
                    type="checkbox"
                    name="status"
                    value={columnShow.status === "status" ? "" : "status"}
                    defaultChecked={
                      columnShow.status === "status" ? true : false
                    }
                  />
                  Status
                </label>
                <label
                  htmlFor="action"
                  className="flex items-center pl-5  py-1"
                >
                  <input
                    className=""
                    onChange={handleColumn}
                    type="checkbox"
                    name="action"
                    value={columnShow.action === "action" ? "" : "action"}
                    defaultChecked={
                      columnShow.action === "action" ? true : false
                    }
                  />
                  Action
                </label>
              </div>
            </div>
          </div>

          <div>
            <div>
              <table ref={ref} id="dataTable">
                <thead>
                  <tr>
                    {columnShow.user === "user" && <th scope="col">USER</th>}
                    {columnShow.email === "email" && <th scope="col">EMAIL</th>}
                    {columnShow.role === "role" && <th scope="col">ROLE</th>}
                    {columnShow.plan === "plan" && <th scope="col">PLAN</th>}
                    {columnShow.status === "status" && (
                      <th scope="col">STATUS</th>
                    )}
                    {columnShow.action === "action" && (
                      <th scope="col">ACTION</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id}>
                      {columnShow.user === "user" && (
                        <td>
                          <div className="user">
                            <div>
                              <img src={user.img} alt="user-img" />
                            </div>
                            <div className="user-info">
                              <p className="name">{user.name}</p>
                              <p className="userName">{user.userName}</p>
                            </div>
                          </div>
                        </td>
                      )}

                      {columnShow.email === "email" && (
                        <td>
                          <div className="email">{user.email}</div>
                        </td>
                      )}

                      {columnShow.role === "role" && (
                        <td>
                          {user.role === "Author" ? (
                            <div className="role-alignment">
                              <img src={author} alt="" />
                              {user.role}
                            </div>
                          ) : user.role === "Maintainer" ? (
                            <div className="role-alignment">
                              <img src={maintainer} alt="" />
                              {user.role}
                            </div>
                          ) : user.role === "Admin" ? (
                            <div className="role-alignment">
                              <img src={computer} alt="" />
                              {user.role}
                            </div>
                          ) : user.role === "Editor" ? (
                            <div className="role-alignment">
                              <img src={vector} alt="" />
                              {user.role}
                            </div>
                          ) : (
                            <div className="role">
                              <img src={subscriber} alt="" />
                              {user.role}
                            </div>
                          )}
                        </td>
                      )}

                      {columnShow.plan === "plan" && (
                        <td className="plan">{user.plan}</td>
                      )}

                      {columnShow.status === "status" && (
                        <td>
                          <div
                            className={`${
                              user.status === "Active"
                                ? "active"
                                : user.status === "Pending"
                                ? "pending"
                                : "inactive"
                            }`}
                          >
                            {user.status}
                          </div>
                        </td>
                      )}

                      {columnShow.action === "action" && (
                        <td className="dropdown">
                          <div>
                            <button className="dropbtn">
                              <BiDotsVertical />
                            </button>
                          </div>
                          <div className="dropdown-content">
                            <button className="btn-icon">
                              <Link to={`/dashboard/updateUser/${user._id}`}>
                                <CiEdit className="edit-icon" />
                              </Link>
                            </button>
                            <button
                              className="btn-icon"
                              onClick={() => handleDelete(user._id)}
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserList;