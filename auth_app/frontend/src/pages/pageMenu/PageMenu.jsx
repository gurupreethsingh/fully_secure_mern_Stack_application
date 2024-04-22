import React from "react";

const PageMenu = () => {
  return (
    <div>
      <ul className="nav justify-content-center bg-light mb-5">
        <li className="nav-item">
          <a
            className="nav-link text-dark text-decoration-underline"
            aria-current="page"
            href="/profile"
          >
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-dark text-decoration-underline"
            href="/changePassword"
          >
            Change Password
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link text-dark text-decoration-underline"
            href="/allusers"
          >
            All Users
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PageMenu;
