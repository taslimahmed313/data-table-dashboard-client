import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BiDotsVertical } from 'react-icons/bi';
import { CiEdit } from 'react-icons/ci';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import vector from "../../../assets/images/Vector (1).png";
import author from "../../../assets/images/Vector (2).png";
import maintainer from "../../../assets/images/Vector (3).png";
import subscriber from "../../../assets/images/Vector (4).png";
import computer from "../../../assets/images/Vector.png";
import "./UserList.css";

const UserList = () => {

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

    return (
      <div className="userList">
        <h1>User List</h1>
        <div>
          <div>
            <table>
              <thead>
                <tr>
                  <th scope="col">USER</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">ROLE</th>
                  <th scope="col">PLAN</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
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
                    <td>
                      <div className="email">{user.email}</div>
                    </td>
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
                    <td className='plan'>{user.plan}</td>
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
                        //   onClick={() => handleDelete(d._id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default UserList;