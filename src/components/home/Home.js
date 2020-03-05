import React, { useState, useEffect } from "react";
import AnimalSpotlight from "../animal/AnimalSpotlight";
import AnimalManager from "../../modules/AnimalManager";

const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    AnimalManager.getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <div>
      <picture>
        <img src={require("./home.png")} alt="Happy Puppy" className="puppyImg"/>
        <div className="animal-spotlight-header" onClick={refreshSpotlightAnimal}>
        <h1>Animal Spotlight</h1>
          {
            spotlightId && <AnimalSpotlight animalId={spotlightId} />
          }
      </div>
      </picture>
      <address>
        Visit Us at the Nashville North Location
      <br />
        500 Puppy Way <br />
        Nashville, TN 37216
    </address>

    </div>
  );
};

export default Home;