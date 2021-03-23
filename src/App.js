import React, { useState, useEffect } from "react";
import "./App.css";
import "react-medium-image-zoom/dist/styles.css";
import pokemon from "pokemontcgsdk";
import Header from "./Header";
import Pokemon from "./Pokemon";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [pocemons, setPocemon] = useState([]);
  pokemon.configure({ apiKey: "03da6d84-de02-4d7f-babf-1358bfcbfd8c" });
  useEffect(() => {
    pokemon.card
      // .where({ q: "set.id:base1", orderBy: "number" })
      .where({ q: "name:snorlax", orderBy: "number" })
      .then((card) => {
        console.log(card); // "Charizard"
        console.log(card.data);
        setPocemon(card.data);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        {pocemons.length > 0 ? (
          pocemons.map((pokemon) => <Pokemon pokemon={pokemon}></Pokemon>)
        ) : (
          <div></div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
