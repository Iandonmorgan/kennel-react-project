import React from "react";
import "./Owner.css"

const OwnerCard = (props) => {
  let pictureFileId;
  try {
    pictureFileId = require(`./owner--${props.owner.id}.png`);
  } catch {
    pictureFileId = require(`./owner.png`);
  }
  return (
    <div className="owner-card">
      <div className="owner-card-content">
        <picture>
          <img src={pictureFileId} alt="Owner" />
        </picture>
        <h3>
          Name: <span className="card-ownername">{props.owner.name}</span>
        </h3>
        <p>Title: {props.owner.title}</p>
        <button type="button"
          onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove Owner</button>
      </div>
    </div>
  );
};

export default OwnerCard;