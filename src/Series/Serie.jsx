import React, { useEffect, useState } from "react";
import pokemon from "pokemontcgsdk";
import Pokemon from "../Pokemon";
import { useParams } from "react-router-dom";
export function Serie() {
  let { name } = useParams();
  const [pocemons, setPocemon] = useState([]);
  pokemon.configure({ apiKey: "03da6d84-de02-4d7f-babf-1358bfcbfd8c" });
  useEffect(() => {
    pokemon.card
      .where({ q: "set.id:" + name, orderBy: "number" })
      // .where({ q: "name:snorlax", orderBy: "number" })
      .then((card) => {
        console.log(card); // "Charizard"
        console.log(card.data);
        setPocemon(card.data);
      });
  }, []);

  return (
    <div>
      <p>Seria: {name}</p>
      {pocemons.length > 0 ? (
        pocemons.map((pokemon) => <Pokemon pokemon={pokemon}></Pokemon>)
      ) : (
        <div></div>
      )}
    </div>
  );
}
