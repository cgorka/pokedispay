import React, { PropTypes, useState, useCallback, useEffect } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";

const Pokemon = (props) => {
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
      <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
        <div>
          <img
            id={props.pokemon.id}
            src={
              isZoomed ? props.pokemon.images.large : props.pokemon.images.small
            }
            alt="pokeke_hives"
            className="image_poke"
          ></img>

          <p> {props.pokemon.number}</p>
          <p> {props.pokemon.set.id}</p>
          <p> {props.pokemon.set.name}</p>
        </div>
      </ControlledZoom>
    </div>
  );
};

Pokemon.propTypes = {};

Pokemon.defaultProps = {};

export default Pokemon;
