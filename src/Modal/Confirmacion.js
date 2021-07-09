import React, { useContext, useEffect } from "react";
import BeenhereRoundedIcon from "@material-ui/icons/BeenhereRounded";
import { Context_total } from "../Contexto/Contex";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Confirmacion() {
  const { Agregado, setAgregado } = useContext(Context_total);
  useEffect(() => {
    console.log(Agregado);
  }, [Agregado]);
  function Quitar() {
    setAgregado(false);
  }
  return (
    <div className="cont_modal_confirmacion">
      <div className="Contenido--modal">
        <BeenhereRoundedIcon style={{ color: "green", fontSize: 40 }} />
        <h3>
          <h3>Producto Agregado! </h3>
        </h3>
        <div className="botones_modal">
          <button onClick={Quitar}>Continuar </button>
          <Link to="/carrito">
            <button onClick={Quitar}>Ir a Carrito</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Confirmacion;
