import React, { useContext, useEffect, useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleRoundedIcon from "@material-ui/icons/RemoveCircleRounded";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import { Context_total } from "../Contexto/Contex";
const ListCompra = (props) => {
  const [subTotal, setsubTotal] = useState(props.precio);
  const { Carrito, setCarrito, setPAGAR, PAGAR } = useContext(Context_total);
  useEffect(() => {
    Total_();
  }, [subTotal, Carrito]);

  function Restar(id) {
    Carrito.forEach((x) => {
      if (x.id === id) {
        x.cantidad -= 1;
        if (x.cantidad <= 0) {
          return x.cantidad === 1;
        }
      }
      setCarrito([...Carrito]);
    });
  }
  function Sumar(id) {
    Carrito.forEach((x) => {
      if (x.id === id) {
        x.cantidad += 1;
      }
      setCarrito([...Carrito]);
    });
  }

  function Total_(e) {
    setsubTotal(props.precio * props.cantidad);
    const element = Carrito.reduce((prev, item) => {
      return prev + item.precio * item.cantidad;
    }, 0);
    setPAGAR(element);
    //Todo.pop();
  }
  function Eliminar(id) {
    if (window.confirm("¿Seguro quieres eliminarlo ?")) {
      Carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          const el = Carrito.splice(index, 1);
          console.log(el);
        }
      });
      setCarrito([...Carrito]);
    }
  }
  return (
    <div className="orden">
      <div className="listado--orden--carrito">
        <div className="producto--carrito">
          <div className="nombre--carrito">
            <h4>{props.name_producto} </h4>
            <h4> $ {props.precio} </h4>
          </div>
        </div>
        <div className="cantidad--carrito">
          <div
            className="boton--restar--carrito"
            onClick={() => Restar(props.id)}
          >
            <RemoveCircleRoundedIcon style={{ color: "red" }} />
          </div>
          <div className="cantidad">
            <p>{props.cantidad} </p>
          </div>
          <div
            className="boton--sumar--carrito"
            onClick={() => Sumar(props.id)}
          >
            <AddCircleIcon style={{ color: "green" }} />
          </div>
          <div
            className="boton--eliminar--producto"
            onClick={() => Eliminar(props.id)}
          >
            <HighlightOffOutlinedIcon style={{ color: "red" }} />
          </div>
        </div>
        <div className="precio--carrito">
          <h3> $ {subTotal} </h3>
        </div>
      </div>
    </div>
  );
};

export default ListCompra;
