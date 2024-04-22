import React from "react";

const InfoBox = ({ bgColor, title, count, icon }) => {
  return (
    <div
      className={`${bgColor} d-flex p-2 border rounded-3 align-items-center`}
    >
      <div className="p-2 text-light">{icon}</div>
      <div className="text-center p-2">
        <p className="text-light">{title}</p>
        <h4 className="text-light">{count}</h4>
      </div>
    </div>
  );
};

export default InfoBox;
