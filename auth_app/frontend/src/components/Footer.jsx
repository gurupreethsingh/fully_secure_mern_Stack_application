import React from "react";

const Footer = () => {
  return (
    <div className="bg-body-tertiary ">
      <div className="text-white d-flex flex-wrap justify-content-evenly p-5">
        <div className="weblinks">
          <h6 className="text-center fw-bold text-dark text-decoration-underline">
            Web Links
          </h6>
          <ul className="nav flex-column nav-underline">
            <li className="nav-item">
              <a className="nav-link text-center text-dark" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center text-dark" href="#">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center text-dark" href="#">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center text-dark" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>

        <div className="Address">
          <h6 className="text-center fw-bold text-dark text-decoration-underline">
            Address
          </h6>
          <ul className="nav flex-column nav-underline">
            <li className="nav-item">
              <a className="nav-link text-center text-dark" href="#">
                Ecoders, 3rd Floor,
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center text-dark" href="#">
                Number - 192, Hesaraghatta Road
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center text-dark" href="#">
                Bangalagunte, Defence colony,
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center text-dark" href="#">
                Bangalore Karnataka
              </a>
            </li>
          </ul>
        </div>

        <div className="Common pages">
          <h6 className="text-center fw-bold text-dark text-decoration-underline">
            Pages
          </h6>
          <ul className="nav flex-column nav-underline">
            <li className="nav-item">
              <a className="nav-link text-center text-dark" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center text-dark" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center text-dark" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center text-dark" href="#">
                Seminars
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center p-1">
        <small className="text-decoration-underline">
          copyright &copy; ecoders-bangalore - ph - 9538596766
        </small>
      </div>
    </div>
  );
};

const myline = { color: "gray" };

export default Footer;
