import { useQuery } from '@tanstack/react-query';
import jsPDF from 'jspdf';
import "jspdf-autotable";
import React, { useRef, useState } from 'react';
import { CSVLink } from 'react-csv';
import { toast } from 'react-hot-toast';
import { BiDotsVertical } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { FaFileCsv, FaPrint, FaTrash, FaUser } from 'react-icons/fa';
import { ImFilePdf, ImPencil } from "react-icons/im";
import { TiArrowLoop, TiArrowMoveOutline, TiCogOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';
import ReactToPrint from 'react-to-print';
import "./AllUsers.css";


const AllUsers = () => {
  const headers = ["USER", "EMAIL", "ROLE", "PLAN", "STATUS", "ACTION"];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = useRef();

   const { data: allData = [], refetch } = useQuery({
     queryKey: ["allData"],
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


  const handleDelete = id =>{
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
  }
  
    return (
      <div>
        <h2 className="table-title" id="tableTitle">
          All Users
        </h2>
        <hr />
        <div className="exports-btn">
          <div className="export-btn">
            <CSVLink
              data={allData}
              filename={"aide-datatable.csv"}
              target="_blank"
            >
              <div className="bg-theme-primary px-5 py-2 text-white text-2xl rounded">
                <FaFileCsv /> Exports Excel
              </div>
            </CSVLink>
          </div>
          <div onClick={generatePDF} className="export-btn">
            <ImFilePdf /> Exports Pdf
          </div>
          <div className="export-btn">
            <ReactToPrint
              trigger={() => (
                <div>
                  <FaPrint></FaPrint> Print
                </div>
              )}
              content={() => ref.current}
            ></ReactToPrint>
          </div>
        </div>
        <table ref={ref} className="table" id="dataTable">
          <thead className="sticky ">
            <tr>
              {headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>
          {loading ? (
            <BarLoader id="stand" color="#36d7b7" />
          ) : (
            <tbody>
              {allData.map((d) => (
                <tr key={d._id}>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>
                    {d.role === "Author" ? (
                      <>
                        <TiCogOutline />
                        {d.role}
                      </>
                    ) : d.role === "Maintainer" ? (
                      <>
                        <TiArrowLoop />
                        {d.role}
                      </>
                    ) : d.role === "Admin" ? (
                      <>
                        <TiArrowMoveOutline />
                        {d.role}
                      </>
                    ) : d.role === "Editor" ? (
                      <>
                        <ImPencil />
                        {d.role}
                      </>
                    ) : (
                      <>
                        <FaUser />
                        {d.role}
                      </>
                    )}
                  </td>
                  <td>{d.plan}</td>
                  <td
                    className={`${
                      d.status === "Active"
                        ? "active"
                        : d.status === "Pending"
                        ? "pending"
                        : "inactive"
                    }`}
                  >
                    {d.status}
                  </td>
                  <td className="dropdown">
                    <button className="dropbtn">
                      <BiDotsVertical />
                    </button>
                    <div className="dropdown-content">
                      <button className="btn-icon">
                        <Link to={`/dashboard/updateUser/${d._id}`}>
                          <CiEdit className="edit-icon" />
                        </Link>
                      </button>
                      <button
                        className="btn-icon"
                        onClick={() => handleDelete(d._id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    );
};

export default AllUsers;