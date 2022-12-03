import React from "react";
import Pokecard from "./Pokecard.jsx";
import "./Pokedex.css";

const Pokedex = ({ pokemon }) => {
  return (
    <div className="Pokedex">
      {pokemon.map((p) => (
        <Pokecard
          key={p.id}
          id={p.id}
          name={p.name}
          type={p.type}
          exp={p.base_experience}
        />
      ))}
    </div>
  );
};

export default Pokedex;
