import React, { useState, useEffect } from "react";
import default_image from "../../assets/mobile.jpg";
import PageMenu from "../pageMenu/PageMenu";
import UserStats from "../userStats/UserStats";
import Search from "../../components/search/Search";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import ChangeRole from "../../components/changeRole/ChangeRole";

const initialState = {
  name: "",
  email: "",
  phone: "",
  bio: "",
  photo: "",
  role: "",
  isVerified: "",
};

const UserList = () => {
  const [profile, setProfile] = useState("initialState");

  const handleImageChange = () => {
    console.log("Handing input changing.");
  };

  const handleInputChange = () => {
    console.log("Image is changing.");
  };

  return (
    <div>
      <h5 className="display-5">All User Stats</h5>
      <div className="container">
        <div className="card m-3 p-5">
          <PageMenu />
          <div className="g-0">
            <UserStats />
          </div>
          <div className="user-list mt-5 mb-5">
            <div className="d-flex justify-content-between">
              <div>
                <h3 className="text-secondary">All Users</h3>
              </div>

              <div>
                <Search />
              </div>
            </div>

            <div className="usertable mt-2 border p-3">
              <table class="table table-sm  text-center">
                <thead className="table-dark text-light ">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Change Role</th>
                    <th scope="col">Delete User</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td className="d-flex justify-content-center">
                      <ChangeRole />
                      <a className="text-warning m-2">
                        <FaUserEdit />
                      </a>
                    </td>
                    <td>
                      <a className="text-danger">
                        <RiDeleteBin6Line />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
