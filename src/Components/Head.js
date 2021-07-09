import React, { useContext } from "react";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import "../App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Context_total } from "../Contexto/Contex";

function Head() {
  const { Carrito } = useContext(Context_total);
  return (
    <div>
      <header>
        <div className="logo--app">
          <Link to="/">
            <h1>MUEBLERIA</h1>
          </Link>
        </div>
        <div className="nav--opciones">
          <Link to="/" className="list-op">
            Inicio
          </Link>
          <Link to="/contacto" className="list-op">
            Contacto
          </Link>
          <Link to="/productos" className="list-op">
            Todos los Productos
          </Link>
          <Link to="/carrito">
            <div className="list-op">
              <p>{Carrito.length} </p>
              <LocalMallOutlinedIcon
                style={{ color: "e5922f", fontSize: 50 }}
              />
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Head;
