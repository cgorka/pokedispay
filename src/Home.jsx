import React, { useEffect, useState } from "react";
import pokemon from "pokemontcgsdk";
import Pokemon from "./Pokemon";

export function Home() {
  const [pocemons, setPocemon] = useState([]);
  pokemon.configure({ apiKey: "03da6d84-de02-4d7f-babf-1358bfcbfd8c" });
  useEffect(() => {
    pokemon.card
      .where({ q: "set.name:base", orderBy: "number" })
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
