import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  let pictureFileId;
  try {
    pictureFileId = require(`./loc--${props.location.id}.png`);
  } catch {
    pictureFileId = require(`./loc.png`);
  }
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={ pictureFileId } alt="Location" />
        </picture>
        <h3>
          Name: <span className="card-locname">{props.location.name}</span>
        </h3>
        <p>Address: {props.location.address}</p>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Shutter Location</button>
      </div>
    </div>
  );
};

export default LocationCard;