import React, { useState, useEffect } from "react";
import "./App.css";
import "react-medium-image-zoom/dist/styles.css";
import pokemon from "pokemontcgsdk";
import Header from "./Header";
import Pokemon from "./Pokemon";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Snorlax from "./Pokemons/Snorlax";
import Series from "./Series/Series";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/Snorlax">
            <Snorlax />
          </Route>
          <Route path="/Series">
            <Series></Series>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  const [pocemons, setPocemon] = useState([]);
  pokemon.configure({ apiKey: "03da6d84-de02-4d7f-babf-1358bfcbfd8c" });
  useEffect(() => {
    pokemon.card
      .where({ q: "set.id:base1", orderBy: "number" })
      // .where({ q: "name:snorlax", orderBy: "number" })
      .then((card) => {
        console.log(card); // "Charizard"
        console.log(card.data);
        setPocemon(card.data);
      });
  }, []);

  return (
    <div>
      <p>Seria Base1</p>
      {pocemons.length > 0 ? (
        pocemons.map((pokemon) => <Pokemon pokemon={pokemon}></Pokemon>)
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default App;
