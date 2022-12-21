import jsPDF from 'jspdf';
import "jspdf-autotable";
import React, { useEffect, useRef, useState } from 'react';
import { CSVLink } from 'react-csv';
import { toast } from 'react-hot-toast';
import { BiDotsVertical } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { FaFileCsv, FaPrint, FaTrash } from 'react-icons/fa';
import { ImFilePdf } from "react-icons/im";
import { Link } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';
import ReactToPrint from 'react-to-print';
import "./DataTable.css";


const DataTable = () => {
  const headers = ["name", "age", "city", "comp", "count", "mail", "end", "fax", "phon", "stay", "post", "fee", "start", "state", "web", ""];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = useRef();


  useEffect(()=>{
    setLoading(true)
    fetch("http://localhost:5000/data")
    .then(res => res.json())
    .then(data => {
      setLoading(false)
      setData(data);
    })
  },[])
  console.log(data)

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#dataTable" });
    doc.save("aide employee.pdf");
  };


  const handleDelete = id =>{
    fetch(`http://localhost:5000/data/${id}`,{
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.deletedCount > 0){
        toast.success("Data Deleted Successfully !!")
      }
    })
  }
  
    return (
      <div>
        <h2 className="table-title" id="tableTitle">
          Aide Data Table
        </h2>
        <hr />
        <div className="exports-btn">
          <div className="export-btn">
            <CSVLink
              data={data}
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
              {data.map((d) => (
                <tr key={d._id}>
                  <td>{d.name}</td>
                  <td>{d.age}</td>
                  <td>{d.city}</td>
                  <td>{d.company}</td>
                  <td>{d.country}</td>
                  <td>{d.email}</td>
                  <td>{d.end}</td>
                  <td>{d.fax}</td>
                  <td>{d.phone}</td>
                  <td>{d.position}</td>
                  <td>{d.postal}</td>
                  <td>{d.salary}</td>
                  <td>{d.start}</td>
                  <td>{d.state}</td>
                  <td>{d.web}</td>
                  <td className="dropdown">
                    <button className="dropbtn">
                      <BiDotsVertical />
                    </button>
                    <div className="dropdown-content">
                      <button className="btn-icon">
                        <Link to={`/dashboard/edit/${d._id}`}>
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

export default DataTable;