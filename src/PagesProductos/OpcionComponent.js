import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../App.css";
function OpcionComponent(props) {
  return (
    <div className="contenedor--seccion">
      <div className="contenedor--producto">
        <div className="nombre--productos">
          <h4>{props.nombre} </h4>
        </div>
        <div className="cantidad--productos">
          <h4>( {props.cantidad} )</h4>
        </div>
      </div>
      <div className="boton--masproducto">
        <div className="mas">
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
}

export default OpcionComponent;
