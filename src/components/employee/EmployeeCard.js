import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="employee-name">Landon Morgan</span>
        </h3>
        <p>Title: Software Developer</p>
      </div>
    </div>
  );
};

export default EmployeeCard;