import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  let pictureFileId;
  try {
    pictureFileId = require(`./loc--${props.rocation.id}.png`);
  } catch {
    pictureFileId = require(`./loc.png`);
  }
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={pictureFileId} alt="Location" />
        </picture>
        <h3>
          Name: <span className="card-locname">{props.rocation.name}</span>
        </h3>
        <p>Address: {props.rocation.address}</p>
        <Link to={`/locations/${props.rocation.id}`}>
          <button>Details</button>
        </Link>
        <button type="button"
          onClick={() => props.history.push(`/locations/${props.rocation.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteLocation(props.rocation.id)}>Shutter Location</button>
      </div>
    </div>
  );
};

export default LocationCard;