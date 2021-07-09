import React, { useContext, useEffect, useState } from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SkipPreviousRoundedIcon from "@material-ui/icons/SkipPreviousRounded";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import Filtros from "../PagesProductos/Filtros";
import DiseñoCards from "../Components/DiseñoCards";
import { Productos } from "../Contexto/Lista_productos.js/productos";
import { Context_total } from "../Contexto/Contex";
import Confirmacion from "../Modal/Confirmacion";
function Productos_page() {
  const [ValInput, setValInput] = useState("");
  const { Prod, setProd } = useContext(Context_total);
  const { Agregado } = useContext(Context_total);

  useEffect(() => {
    document.title = "Todos los Productos";
    Buscar();
  }, []);

  function Buscar() {
    const res = Productos.filter((x) => x.nombre.indexOf(ValInput) !== -1);
    if (res) {
      console.log(res);
      setProd(res);
    }
  }
  function onChange(e) {
    setValInput(e.target.value);
    Buscar();
  }

  return (
    <div>
      <title>Todos los Productos</title>

      <div className="Contenedor--header--busqueda">
        <div className="union">
          <input
            placeholder="Busque un producto ..."
            type="text"
            value={ValInput}
            onChange={(e) => onChange(e)}
          />
          <div className="icono--busqueda">
            <SearchRoundedIcon />
          </div>
        </div>
      </div>
      <div className="main--busqueda">
        <div className="secciones--productos">
          <Filtros />
        </div>
        <div className="busqueda--productos">
          {Prod.map((x) => {
            return (
              <DiseñoCards
                id={x.id}
                img={x.img}
                titulo={x.nombre}
                precio={x.precio}
              />
            );
          })}
        </div>
      </div>
      <div></div>
      {Agregado ? (
        <div className="cont_mo">
          <div className="Modal">
            <Confirmacion />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Productos_page;
