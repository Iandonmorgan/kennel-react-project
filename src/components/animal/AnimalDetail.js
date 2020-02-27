import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";

const AnimalDetail = props => {
    const [animal, setAnimal] = useState({ name: "", breed: "" });
    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        setIsLoading(true);
        AnimalManager.delete(props.animalId).then(() =>
            props.history.push("/animals")
        );
    };

    useEffect(() => {
        //get(id) from AnimalManager and hang on to the data; put it into state
        AnimalManager.get(props.animalId).then(animal => {
            setAnimal({
                name: animal.name,
                breed: animal.breed,
                id: animal.id
            });
            setIsLoading(false);
        });
    }, [props.animalId]);

    let pictureFileId;
    try {
        pictureFileId = require(`./animal--${animal.id}.png`);
    } catch {
        pictureFileId = require(`./animal.svg`);
    }
    if (animal.name !== undefined && animal.breed !== undefined) {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={pictureFileId} alt="My Dog" />
                    </picture>
                    <h3>
                        Name: <span style={{ color: "darkslategrey" }}>{animal.name}</span>
                    </h3>
                    <p>Breed: {animal.breed}</p>
                    <button type="button" disabled={isLoading} onClick={handleDelete}>
                        Discharge Animal
        </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./lostdog.png')} alt="My Dog" />
                    </picture>
                    <center><h3>PUPPY NOT FOUND</h3></center>
                </div>
            </div>
        )
    }
};

export default AnimalDetail;