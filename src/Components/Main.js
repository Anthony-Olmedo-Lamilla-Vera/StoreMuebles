import React, { useContext, useEffect } from "react";
import "../App.css";
import Obras from "./Obras";
import Headmain from "./Headmain";
import DiseñoCards from "./DiseñoCards";
import SeccionCatalogo from "./SeccionCatalogo";
import GaleriaCatalogo from "./GaleriaCatalogo";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import Footer from "./Footer";
import { Productos } from "../Contexto/Lista_productos.js/productos";
import Confirmacion from "../Modal/Confirmacion";
import { Context_total } from "../Contexto/Contex";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function Main() {
  const { Agregado } = useContext(Context_total);
  useEffect(() => {
    console.log(Agregado);
    document.title = "MuebleSas";
  }, [Agregado]);
  return (
    <>
      <div className="Portada--inicio">
        <Obras />
      </div>
      <div className="main">
        <Headmain />
        <div className="container--card">
          {Productos.map((x) => {
            return (
              <DiseñoCards
                producto={x}
                id={x.id}
                titulo={x.nombre}
                precio={x.precio}
                cantidad={x.cantidad}
                img={x.img}
              />
            );
          })}
        </div>
        <div className="container--catalogo">
          <div className="header--catalogo">
            <SeccionCatalogo titulo="Catalogo Productos" />
          </div>
          <div className="galeria--catalogo"></div>
          <GaleriaCatalogo />
        </div>
        <div className="Redes--catalogo">
          <SeccionCatalogo titulo=" Redes Sociales" />
          <div className="iconos--redes">
            <a target="_blank" href="https://www.facebook.com/">
              <FacebookIcon
                className="colors"
                color="blue"
                style={{ color: "blue", fontSize: 200 }}
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <InstagramIcon style={{ color: "#00000", fontSize: 180 }} />
            </a>
            <a target="_blank" href="https://www.gmail.com/">
              <EmailIcon style={{ fontSize: 180 }} />
            </a>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=+0960847188&text=Hola%20!%20vengo%20de%20tu%20pagina%20web,%20me%20parece%20genial%20lo%20que%20haces%20"
            >
              <WhatsAppIcon style={{ color: "green", fontSize: 180 }} />
            </a>
          </div>
          <h3>Contactanos en nuestras Redes ... </h3>
        </div>
        <div></div>
      </div>
      <div className="footer">
        <div className="footer--contenido">
          <Footer />
        </div>
      </div>
      {Agregado ? (
        <div className="cont_mo">
          <div className="Modal">
            <Confirmacion />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Main;
