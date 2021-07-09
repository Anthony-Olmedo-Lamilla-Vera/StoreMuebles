import React, { useEffect } from "react";
import Form from "../PageContacto/Form";
function Contacto() {
  useEffect(() => {
    document.title = "Contacto";
  }, []);
  return (
    <div>
      <title>Contacto</title>
      <div className="titulo--contact">
        <h2>Contacto y Sugerencias</h2>
      </div>
      <div className="container--form--contacto">
        <Form />
      </div>
    </div>
  );
}

export default Contacto;
