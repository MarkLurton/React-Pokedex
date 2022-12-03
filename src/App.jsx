import Pokedex from "./Pokedex.jsx";
import pokemon from "./pokemon";
import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
