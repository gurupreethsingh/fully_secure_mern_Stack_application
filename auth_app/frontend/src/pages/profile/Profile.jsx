import React, { useState, useEffect } from "react";
import default_image from "../../assets/mobile.jpg";
import PageMenu from "../pageMenu/PageMenu";

const initialState = {
  name: "",
  email: "",
  phone: "",
  bio: "",
  photo: "",
  role: "",
  isVerified: "",
};

const Profile = () => {
  const [profile, setProfile] = useState("initialState");

  const handleImageChange = () => {
    console.log("Handing input changing.");
  };

  const handleInputChange = () => {
    console.log("Image is changing.");
  };

  return (
    <div>
      <h5 className="display-5">User Profile</h5>
      <div className="container">
        <div className="card m-3 p-5">
          <PageMenu />
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={default_image}
                className="img-fluid rounded-start w-100 "
                alt="user profile"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6 className="card-title text-secondary">
                  Name: Gurupreeth Singh.
                </h6>
                <p className="card-text text-secondary">
                  <b>Role:</b> Admin
                </p>
                <form>
                  <div className="input-group input-group-sm">
                    <span className="fw-bold me-3 text-secondary">
                      Change profile image :{" "}
                    </span>
                    <input
                      type="file"
                      placeholder="Change Photo"
                      className="form-control"
                      id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04"
                      aria-label="Upload"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>

                  <div className="input-group input-group-sm mt-3 mb-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-sm"
                    >
                      Update Name:
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      required
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="input-group input-group-sm mb-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-sm"
                    >
                      Update Email:
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      required
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="input-group input-group-sm mt-3 mb-3">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-sm"
                    >
                      Update Phone:
                    </span>
                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                      required
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Enter the user bio here"
                      id="floatingTextarea"
                      name="bio"
                      value={profile.bio}
                      onChange={handleInputChange}
                    ></textarea>
                    <label htmlFor="floatingTextarea">Bio</label>
                  </div>

                  <div className="text-center mt-3 mb-3">
                    <button
                      className="btn btn-sm btn-outline-success"
                      type="submit"
                    >
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
