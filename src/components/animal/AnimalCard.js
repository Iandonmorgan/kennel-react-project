import React from "react";
import "./Animal.css";
import { Link } from "react-router-dom";
import { firstLetterCase } from '../../modules/helpers'

const AnimalCard = (props) => {
  let pictureFileId;
  try {
    pictureFileId = require(`./animal--${props.animal.id}.png`);
  } catch {
    pictureFileId = require(`./animal.svg`);
  }
  if (props.deleteAnimal) {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={pictureFileId} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">
            {firstLetterCase(props.animal.name)}
          </span></h3>
          <p>Breed: {props.animal.breed}</p>
          <Link to={`/animals/${props.animal.id}`}>
            <button>Details</button>
          </Link>
          <button type="button"
            onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}>
            Edit
        </button>
          <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge Animal</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={pictureFileId} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">
            {firstLetterCase(props.animal.name)}
          </span></h3>
          <p>Breed: {props.animal.breed}</p>
          <Link to={`/animals/${props.animal.id}`}>
            <button>Details</button>
          </Link>
          <button type="button"
            onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}>
            Edit
        </button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;