import React, { PropTypes, useState, useCallback, useEffect } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";

const Seria = (props) => {
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
      {/*<ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>*/}
      <div>
        <img
          id={props.pokemon.id}
          src={
            isZoomed ? props.pokemon.images.symbol : props.pokemon.images.logo
          }
          alt="pokeke_hives"
          className="image_poke"
        ></img>

        <p> {props.pokemon.name}</p>
        <p> {props.pokemon.ptcgoCode}</p>
        <p> {props.pokemon.series}</p>
        <p> {props.pokemon.releaseDate}</p>
        <p> {props.pokemon.printedTotal}</p>
      </div>
      {/*</ControlledZoom>*/}
    </div>
  );
};

Seria.propTypes = {};

Seria.defaultProps = {};

export default Seria;
