import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = ({ value, onChange }) => {
  return (
    <div className="d-flex border p-1 rounded-2 align-items-center ">
      <IoSearchOutline className="m-2" />
      <input
        type="text"
        placeholder="Search Users"
        value={value}
        onChange={onChange}
        className="border-0"
      />
    </div>
  );
};

export default Search;
