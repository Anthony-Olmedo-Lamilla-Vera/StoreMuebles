import React, { useContext, useEffect, useState } from "react";
import ListCompra from "../PageCarrito/ListCompra";
import BotonComprar from "../Components/BotonComprar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Context_total } from "../Contexto/Contex";
function Carrito() {
  const { TOTAL, PAGAR, Carrito } = useContext(Context_total);
  useEffect(() => {
    document.title = "Carrito de Productos";
  }, [PAGAR, Carrito]);

  return (
    <div className="listado--orden">
      <title>Carrito de Productos</title>

      <div className="head--carrito">
        <h3>Orden de Compras</h3>
      </div>
      <div className="product--listado--carrito">
        <div className="id--producto">
          <h3>Nombre </h3>
          <h3 className="cantidad--listado">Cantidad </h3>
          <h3> Total</h3>
        </div>
        {Carrito.map((x) => {
          console.log(Carrito);
          return (
            <ListCompra
              id={x.id}
              name_producto={x.nombre}
              precio={x.precio}
              cantidad={x.cantidad}
            />
          );
        })}
        <div className="cantidad--pagar">
          <div className="text--pagar">
            <h3>Total A Pagar:</h3>
          </div>
          <div className="dinero--pagar">
            <p>$ {PAGAR} </p>
          </div>
        </div>
      </div>
      <div className="botones--comprar">
        <div>
          <Link to="carrito/orden">
            <a className="card--comprar">Comprar</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
