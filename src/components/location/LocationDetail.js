import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
    const [location, setLocation] = useState({ name: "", address: "" });
    const [isLoading, setIsLoading] = useState(true);

    const handleDelete = () => {
        //invoke the delete function in LocationManager and re-direct to the location list.
        setIsLoading(true);
        LocationManager.delete(props.locationId).then(() =>
            props.history.push("/locations")
        );
    };

    useEffect(() => {
        //get(id) from LocationManager and hang on to the data; put it into state
        LocationManager.get(props.locationId)
            .then(location => {
                setLocation({
                    name: location.name,
                    address: location.address
                });
                setIsLoading(false);
            });
    }, [props.locationId]);

    let pictureFileId;
    try {
      pictureFileId = require(`./loc--${props.animal.id}.png`);
    } catch {
      pictureFileId = require(`./loc.png`);
    }

    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={ pictureFileId } alt="Location" />
                </picture>
                <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
                <p>Address: {location.address}</p>
                <button type="button" disabled={isLoading} onClick={handleDelete}>
                    Shutter Location
        </button>
            </div>
        </div>
    );
}

export default LocationDetail;