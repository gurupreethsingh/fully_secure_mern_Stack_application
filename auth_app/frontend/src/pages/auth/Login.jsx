import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import PasswordInput from "../../components/passwordinput/PasswordInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  // fetch function.
  const handleInputChange = (e) => {
    e.target.value;
  };

  const loginUser = (e) => {
    e.preventDefault();
    console.log("login user function.");
  };

  return (
    <div>
      <form
        className="loginform rounded rounded-3 p-5 bg-light-subtle"
        onSubmit={loginUser}
      >
        <div className="text-center text-secondary">
          <AiOutlineLogin size={50} />
        </div>
        <h5 className="text-center text-success text-opacity-50 text-decoration-underline pb-2 display-4">
          Login
        </h5>
        <div className="mb-3 text-center border rounded">
          <FaGoogle />
          <a href="/register" className="btn btn-sm   text-center">
            Sign in with Google
          </a>
        </div>

        <div className="text-center">
          <p className="fw-semibold">Or</p>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <PasswordInput
            placeholder="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <a href="/forgotpassword" className="text-secondary">
            Forgot Password?
          </a>
        </div>

        <div className="d-grid gap-2 d-md-block text-center">
          <button className="btn btn-sm btn-outline-success" type="submit">
            Login
          </button>
        </div>

        <div className="m-3 text-center">
          <a href="/register" className="text-secondary">
            Need Account? Register
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
