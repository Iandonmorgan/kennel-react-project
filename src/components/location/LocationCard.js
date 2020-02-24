import React from "react";
import "./Location.css"

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./loc.png")} alt="Location" />
        </picture>
        <h3>
          Name: <span className="card-locname">{props.location.name}</span>
        </h3>
        <p>Address: {props.location.address}</p>
      </div>
    </div>
  );
};

export default LocationCard;