import React, { PropTypes, useEffect, useState } from "react";
import pokemon from "pokemontcgsdk";
import Pokemon from "../Pokemon";

const Snorlax = (props) => {
  const [pocemons1, setPocemon1] = useState([]);
  pokemon.configure({ apiKey: "03da6d84-de02-4d7f-babf-1358bfcbfd8c" });
  useEffect(() => {
    pokemon.card
      // .where({ q: "set.id:base1", orderBy: "number" })
      .where({ q: "name:snorlax", orderBy: "number" })
      .then((card) => {
        console.log(card); // "Charizard"
        console.log(card.data);
        setPocemon1(card.data);
      });
  }, []);

  return (
    <div>
      {pocemons1.length > 0 ? (
        pocemons1.map((pokemon) => <Pokemon pokemon={pokemon}></Pokemon>)
      ) : (
        <div></div>
      )}
    </div>
  );
};

Snorlax.propTypes = {};

Snorlax.defaultProps = {};

export default Snorlax;
