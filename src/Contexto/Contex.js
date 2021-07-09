import React, { createContext, useState } from "react";
import { Productos } from "./Lista_productos.js/productos";
export const Context_total = createContext();
function Contex({ children }) {
  const [PAGAR, setPAGAR] = useState(0);
  const [TOTAL, setTOTAL] = useState(1);
  const [Todo, setTodo] = useState([]);
  const [Carrito, setCarrito] = useState([]);
  const [Prod, setProd] = useState(Productos);
  const [Verificacion, setVerificacion] = useState(true);
  const [Agregado, setAgregado] = useState(false);

  return (
    <Context_total.Provider
      value={{
        Carrito,
        setCarrito,
        Todo,
        setTodo,
        PAGAR,
        setPAGAR,
        TOTAL,
        setTOTAL,
        Prod,
        setProd,
        Verificacion,
        setVerificacion,
        Agregado,
        setAgregado,
      }}
    >
      {children}
    </Context_total.Provider>
  );
}

export default Contex;
