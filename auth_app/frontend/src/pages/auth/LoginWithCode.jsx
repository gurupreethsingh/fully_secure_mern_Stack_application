import React, { useState, useEffect } from "react";
import { CiUnlock } from "react-icons/ci";

const LoginWithCode = () => {
  // hooks for email id.
  const [loginCode, setLoginCode] = useState("");

  // fetch function.
  const handleInputChange = (e) => {
    e.target.value;
  };

  return (
    <div>
      <form className="loginform rounded rounded-3 p-5 bg-light-subtle">
        <div className="text-center text-secondary">
          <CiUnlock size={50} />
        </div>
        <h5 className="text-center text-danger text-opacity-50 text-decoration-underline pb-2 display-4">
          Enter Access Code
        </h5>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter The Access Key
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={loginCode}
            placeholder="Login code"
            onChange={(e) => setLoginCode(e.target.value)}
            name="loginCode"
            required
          />
        </div>

        <div className="d-grid gap-2 d-md-block text-center">
          <button className="btn btn-sm btn-outline-dark" type="submit">
            Proceed To Login
          </button>
        </div>
        <div>
          <small>
            <p className="text-center m-3">
              Check your email id for your login access code.
            </p>
          </small>
        </div>

        <div className="m-3 d-flex justify-content-between">
          <a href="/home" className=" btn btn-sm btn-outline-secondary">
            Home
          </a>

          <a href="#" className="btn btn-sm btn-outline-success fw-bold">
            Resend Code
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginWithCode;
