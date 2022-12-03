import React from "react";
import "./Pokecard.css";

const Pokecard = ({ id, name, type, exp }) => {
  return (
    <div className="Pokecard">
      <h2>{name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt=""
      ></img>
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
};

export default Pokecard;
