import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function PagoErroneo() {
  return (
    <div className="PageErr">
      <title>ERROR!</title>

      <h3>ERRO DE PAGO </h3>
      <Link to="/productos">
        <button>Regresar a ver productos</button>
      </Link>
    </div>
  );
}

export default PagoErroneo;
