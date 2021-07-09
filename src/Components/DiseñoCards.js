import React, { useContext, useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Context_total } from "../Contexto/Contex";
import { Productos } from "../Contexto/Lista_productos.js/productos";
import Confirmacion from "../Modal/Confirmacion";

function DiseñoCards(props) {
  const { Agregado, setAgregado, Carrito, setCarrito } =
    useContext(Context_total);

  function Agg_Carrito(id) {
    const check = Carrito.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const consult = Productos.filter((x) => x.id === id);
      setCarrito([...Carrito, ...consult]);
      setAgregado(true);
    } else {
      setAgregado(true);
    }
  }

  return (
    <div className="card">
      <div className="card--titulo">
        <h3>{props.titulo} </h3>
      </div>
      <div className="card--img">
        <img src={props.img} alt="" />
      </div>
      <div className="card--precio">
        <h5>$ {props.precio} </h5>
      </div>
      <div className="card--botones">
        <div className="card--carrito" onClick={() => Agg_Carrito(props.id)}>
          <a>Agregar Carrito</a>
          <ShoppingCartOutlinedIcon style={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  );
}

export default DiseñoCards;
