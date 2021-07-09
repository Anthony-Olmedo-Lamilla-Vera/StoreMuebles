import React from "react";
import "../App.css";
import PermContactCalendarRoundedIcon from "@material-ui/icons/PermContactCalendarRounded";

function Presentacion() {
  return (
    <div>
      <div className="Presentacion">
        <div className="Presentacion--texto">
          <h3>
            <span> Bienvenido</span> un gusto saludarlo
          </h3>
          <h3>
            Tenemos una gran variedad de Muebles y Modelos que te encantaran
          </h3>
          <h3>A continuacion podras ver unos de nuestros acabados ... </h3>
        </div>
        <div className="Presentacion--boton">
          <button className="button--contacto">Contactarme</button>
          <PermContactCalendarRoundedIcon
            style={{ fontSize: 60, color: "blue" }}
          />
        </div>
      </div>
      <div className="encabezado--main"></div>
    </div>
  );
}

export default Presentacion;
