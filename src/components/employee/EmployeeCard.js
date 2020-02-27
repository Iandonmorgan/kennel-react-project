import React from "react";
import "./Employee.css"

const EmployeeCard = (props) => {
  let pictureFileId;
  try {
    pictureFileId = require(`./employee--${props.employee.id}.png`);
  } catch {
    pictureFileId = require(`./employee.png`);
  }
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={ pictureFileId } alt="Employee" />
        </picture>
        <h3>
          Name: <span className="card-employeename">{props.employee.name}</span>
        </h3>
        <p>Title: {props.employee.title}</p>
        <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>Terminate Employee</button>
      </div>
    </div>
  );
};

export default EmployeeCard;