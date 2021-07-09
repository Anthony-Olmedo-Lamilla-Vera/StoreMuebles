import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import "../App.css";

function Footer() {
  return (
    <div className="contenedor--footer">
      <div>
        <div className="texto--footer">
          <h3>Derechos Reservados </h3>
          <p>
            <CopyrightIcon />
          </p>
        </div>
        <div className="autor--footer">
          <h5>Antocraxx</h5>
        </div>
      </div>
      <div className="contactos--footer">
        <h3>Contactos</h3>
        <div className="telefono">
          <h4>Numero Telefono</h4>
          <h5>0957686306</h5>
        </div>
        <div className="correoElectronico">
          <h4>Correo Electronico</h4>
          <h5>Anthony.lamilla@gmail.com</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
