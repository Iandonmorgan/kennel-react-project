import React from "react";
import "./Owner.css"

const OwnerCard = (props) => {
  return (
    <div className="owner-card">
      <div className="owner-card-content">
        <picture>
          <img src={require(`./owner--${props.owner.id}.png`)} alt="Owner" />
        </picture>
        <h3>
          Name: <span className="card-ownername">{props.owner.name}</span>
        </h3>
        <p>Title: {props.owner.title}</p>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove Owner</button>
      </div>
    </div>
  );
};

export default OwnerCard;