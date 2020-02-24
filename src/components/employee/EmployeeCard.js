import React from "react";
import "./Employee.css"

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee.png")} alt="Employee" />
        </picture>
        <h3>
          Name: <span className="card-employeename">{props.employee.name}</span>
        </h3>
        <p>Title: {props.employee.title}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;