import React, { useState, useEffect } from "react";
import { VscReplaceAll } from "react-icons/vsc";
import PasswordInput from "../../components/passwordinput/PasswordInput";
import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const initialState = { oldPassword: "", password: "", password2: "" };

const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState);

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  const timesIcon = <FaCheck className="text-success" />;
  const crossIcon = <RxCross1 className="text-danger" />;

  const switchIcon = (condition) => {
    if (condition) {
      return timesIcon;
    }
    return crossIcon;
  };

  const { oldPassword, password, password2 } = formData;

  // fetch function.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // use redux to check lower or uppercase.
    if (password.match(/^(?=.*[a-z])(?=.*[A-Z])/)) {
      setUCase(true);
    } else {
      setUCase(false);
    }

    // check for number validation.
    if (password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }

    // check for number validation.
    if (password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }

    // check for special character validation.
    if (password.match(/([!,@,#,$,%,^,&,*,(,),?,_,.,~,<,>,/,])/)) {
      setSChar(true);
    } else {
      setSChar(false);
    }

    // check for password length
    if (password.length > 5) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
  }, [password]);

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
          <VscReplaceAll size={50} />
        </div>
        <h5 className="text-center text-danger text-opacity-50 text-decoration-underline pb-2 display-4">
          Change password
        </h5>

        <div className="mb-3">
          <label htmlFor="currrentpassword" className="form-label">
            Current Password
          </label>
          <PasswordInput
            placeholder="Enter Current Password"
            id="currentpassword"
            name="oldPassword"
            value={oldPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            New Password
          </label>
          <PasswordInput
            placeholder="Enter a new password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password2" className="form-label">
            Confirm New Password
          </label>
          <PasswordInput
            placeholder="Confirm password"
            id="password2"
            name="password2"
            value={password2}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="m-3">
          <ul className="list-group list-group-flush border border-secondary rounded">
            <li className="list-group-item text-secondary">
              {/* {uCase ? timesIcon : crossIcon} &nbsp; Lowercase & Uppercase */}
              {switchIcon(uCase)}&nbsp; Should contain one Lowercase & One
              Uppercase
            </li>

            <li className="list-group-item text-secondary">
              {/* {uCase ? timesIcon : crossIcon} &nbsp; Lowercase & Uppercase */}
              {switchIcon(num)}&nbsp; Number between (0 - 9)
            </li>

            <li className="list-group-item text-secondary">
              {/* {uCase ? timesIcon : crossIcon} &nbsp; Lowercase & Uppercase */}
              {switchIcon(sChar)}&nbsp; Atleast One Special Character(!@#$%^&*)
            </li>

            <li className="list-group-item text-secondary">
              {/* {uCase ? timesIcon : crossIcon} &nbsp; Lowercase & Uppercase */}
              {switchIcon(passwordLength)}&nbsp; Password should be atleast 6
              Characters.
            </li>
          </ul>
        </div>

        <div className="d-grid gap-2 d-md-block text-center">
          <button className="btn btn-sm btn-outline-dark" type="submit">
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
