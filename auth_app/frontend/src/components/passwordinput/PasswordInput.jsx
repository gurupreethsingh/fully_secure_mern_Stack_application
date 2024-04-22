import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ placeholder, value, onChange, name, onPaste }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password d-flex w-100 border justify-content-between">
      <input
        className="w-100 border-0 rounded-2 p-2"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        required
        name={name}
        value={value}
        onChange={onChange}
        onPaste={onPaste}
      />

      <div className="icon m-2" onClick={togglePassword}>
        {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
      </div>
    </div>
  );
};

export default PasswordInput;
