// Write your Character component here
import React from "react";
import "./Character.css";

let Character = (props) => {
  return (
    <div className="charCard">
        <img className="image" src="https://cdn.iconscout.com/icon/free/png-256/starwars-6-569425.png"></img>
        <h1>{props.chars.name}</h1>
        <p>Gender: {props.chars.gender.toUpperCase()}</p>
        <p>Eye Color: {props.chars.eye_color.toUpperCase()}</p>
        <p>Burf Day: {props.chars.birth_year}</p>
    </div>
  );
};

export default Character;
