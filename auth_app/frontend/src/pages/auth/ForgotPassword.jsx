import React, { useState, useEffect } from "react";
import { CiMail } from "react-icons/ci";

const ForgotPassword = () => {
  // hooks for email id.
  const [email, setEmail] = useState("");

  // fetch function.
  const handleInputChange = (e) => {
    e.target.value;
  };

  return (
    <div>
      <form className="loginform rounded rounded-3 p-5 bg-light-subtle">
        <div className="text-center text-secondary">
          <CiMail size={50} />
        </div>
        <h5 className="text-center text-danger text-opacity-50 text-decoration-underline pb-2 display-4">
          Forgot Password
        </h5>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your Email Id To Get The Reset Password Link
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="d-grid gap-2 d-md-block text-center">
          <button className="btn btn-sm btn-outline-dark" type="submit">
            Get Reset Link
          </button>
        </div>

        <div className="m-3 d-flex justify-content-between">
          <a href="/home" className=" btn btn-sm btn-outline-secondary">
            Home
          </a>

          <a href="/login" className="btn btn-sm btn-outline-success">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
