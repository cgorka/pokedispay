import React, { PropTypes, useEffect, useState } from "react";
import pokemon from "pokemontcgsdk";
import Pokemon from "../Pokemon";
import Seria from "./Seria";

const Series = (props) => {
  const [seria, setSeria] = useState([]);
  pokemon.configure({ apiKey: "03da6d84-de02-4d7f-babf-1358bfcbfd8c" });
  useEffect(() => {
    pokemon.set
      // .where({ q: "set.id:base1", orderBy: "number" })
      // .where({ q: "name:snorlax" })
      .where({ q: "name:*", orderBy: "releaseDate" })
      .then((card) => {
        console.log(card); // "Charizard"
        console.log(card.data);
        setSeria(card.data);
      });
  }, []);

  return (
    <div>
      {seria.length > 0 ? (
        seria.map((pokemon) => <Seria pokemon={pokemon}></Seria>)
      ) : (
        <div></div>
      )}
    </div>
  );
};

Series.propTypes = {};

Series.defaultProps = {};

export default Series;
