import React from "react";

const Home = () => {
  return (
    <div>
    <picture>
          <img src={require("./home.png")} alt="Happy Puppy" />
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