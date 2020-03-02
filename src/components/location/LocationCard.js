import React from "react";
import "./Location.css";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
  let pictureFileId;
  try {
    pictureFileId = require(`./loc--${props.kennelLocation.id}.png`);
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
          Name: <span className="card-locname">{props.kennelLocation.name}</span>
        </h3>
        <p>Address: {props.kennelLocation.address}</p>
        <Link to={`/locations/${props.kennelLocation.id}`}>
          <button>Details</button>
        </Link>
        <button type="button"
          onClick={() => props.history.push(`/locations/${props.kennelLocation.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteLocation(props.kennelLocation.id)}>Shutter Location</button>
      </div>
    </div>
  );
};

export default LocationCard;