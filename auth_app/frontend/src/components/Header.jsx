import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { IoLogoEuro } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-wrap text-center align-items-center justify-content-between bg-light p-2">
      <ul className="nav d-flex align-items-center ">
        <li className="nav-item">
          <a className={`nav-link d-flex align-items-center m-2`} href="/">
            <IoLogoEuro className="text-dark" />{" "}
            <span className="text-dark"> Ecoders</span>
          </a>
        </li>
        <li className="nav-item">
          <a className={` nav-link text-dark m-2`} href="/">
            home
          </a>
        </li>
        <li className="nav-item">
          <a className={` nav-link text-dark m-2`} href="profile">
            Profile
          </a>
        </li>

        <li className="nav-item">
          <a className={` nav-link text-dark m-2`} href="/admin">
            Admin
          </a>
        </li>
      </ul>

      <ul className="nav d-flex flex-wrap align-items-center">
        <li className="nav-item">
          <a
            className={`nav-link d-flex align-items-center m-2`}
            href="/profile"
          >
            <CiUser /> <span className="text-dark"> Gurupreeth</span>
          </a>
        </li>

        <li className="nav-item">
          <a className={` btn btn-sm btn-outline-success m-2`} href="/login">
            <AiOutlineLogin /> Login
          </a>
        </li>

        <li className="nav-item">
          <a className={`btn btn-sm btn-outline-danger m-2`} href="#">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
