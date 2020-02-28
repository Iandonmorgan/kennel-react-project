import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

  const sloganArray = ["A pet care company.", "Bark up our tree!", "Bone-afide dog care.", "Butt-wigglin’ fun.", "Call off the dogs!", "Care. Love. Compassion.", "Chasin’ tails.", "Come. Sit. Play with us!", "Comitted to excellent in pet care.", "Did someone say WALK?", "Dog gone walking.", "Every day’s a dog day.", "For all the good boys and girls.", "Get a leg up.", "It’s a dog-eat-dog world.", "It’s good to be home.", "Just your dog and all his friends.", "Keep calm and play with the pups.", "Leave your pets in safe hands.", "Let’s go for a walk!", "Life is better with a dog.", "Love your pets.", "Loving care when you are not there.", "Only the best for your fur baby.", "Professional pet friends.", "Pup, pup, hooray!", "Such lucky dogs.", "The kind of care your pets deserve.", "The pet protection pose.", "The Safe Sitters.", "Trust the best with your pets.", "Unleash the hounds!", "Walkin’ and waggin’", "We love your dog like our own.", "We’ll pamper your pupper.", "We’re the top dog!", "We’ll make your pet smile.", "When only the best will do.", "Who let the dogs out?", "Your dog’s favorite time of day.", "Your pet sitting solution."]

  const [slogan, setSlogan] = useState(sloganArray[0]);
  
  const refreshSlogan = () => {
    setSlogan(sloganArray[Math.floor(Math.random() * sloganArray.length)])
  };

  return (
    <header>
      <h1 className="site-title">
        Morgan Kennels
        <br />
        <small onClick={refreshSlogan}>{slogan}</small>
      </h1>
      <nav>
        <ul className="container">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/animals">
              Animals
            </Link>
          </li>
          <li><Link className="nav-link" to="/locations">Locations</Link></li>
          <li><Link className="nav-link" to="/employees">Employees</Link></li>
          <li><Link className="nav-link" to="/owners">Owners</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;