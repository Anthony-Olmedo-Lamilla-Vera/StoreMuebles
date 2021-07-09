import React, { useContext } from "react";
import OpcionComponent from "./OpcionComponent";
import "../App.css";
import { Context_total } from "../Contexto/Contex";
import { Productos } from "../Contexto/Lista_productos.js/productos";
function Filtros() {
  const { Prod, setProd } = useContext(Context_total);

  function Categ(categoria) {
    const res = Productos.filter((x) => x.categoria === categoria);

    setProd(res);
  }

  return (
    <div className="cont--filtros">
      <div className="header--seccion">
        <h3>CATEGORIAS</h3>
      </div>
      <div className="contenedor--seccion--productos">
        <div className="secciones">
          {Productos.map((x) => {
            return (
              <div onClick={() => Categ(x.categoria)}>
                <OpcionComponent nombre={x.categoria} cantidad={x.stock} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Filtros;
