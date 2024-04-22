import React, { useState } from "react";

const ChangeRole = () => {
  const [userRole, setUserRole] = useState("");

  return (
    <div>
      <form>
        <select
          className="form-select border-0 border-bottom"
          aria-label="Default select example"
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
        >
          <option selected>Choose Role</option>
          <option value="subscriber">Subscriber</option>
          <option value="author">Author</option>
          <option value="admin">Admin</option>
          <option value="suspended">Suspended</option>
        </select>
      </form>
    </div>
  );
};

export default ChangeRole;
