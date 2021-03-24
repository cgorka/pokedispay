import React, { PropTypes, useState, useCallback, useEffect } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import { Link } from "react-router-dom";
const SeriaBox = (props) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);
  useEffect(() => {
    return () => {
      console.log("props: ", props);
      console.log("11: ", "11");
    };
  }, []);

  var text = "";

  return (
    <div className="box">
      <div>
        <img
          id={props.pokemon.id}
          src={
            isZoomed ? props.pokemon.images.symbol : props.pokemon.images.logo
          }
          alt="pokeke_hives"
          className="image_poke"
        ></img>
        <Link to={"/Serie/" + props.pokemon.id}>
          <button type="button" className="btn btn-info">
            Show Pokemons
          </button>
        </Link>
        <p> {props.pokemon.name}</p>
        <p> {props.pokemon.ptcgoCode}</p>
        <p> {props.pokemon.series}</p>
        <p> {props.pokemon.releaseDate}</p>
        <p> {props.pokemon.printedTotal}</p>
      </div>
    </div>
  );
};

SeriaBox.propTypes = {};

SeriaBox.defaultProps = {};

export default SeriaBox;
