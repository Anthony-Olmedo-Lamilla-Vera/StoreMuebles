import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Head from "./Components/Head";
import Main from "./Components/Main";
import Contacto from "./Pages/Contacto";
import Productos_page from "./Pages/Productos";
import Ofertas from "./Pages/Ofertas";
import Carrito from "./Pages/Carrito";
import Contex, { Context_total } from "./Contexto/Contex";
import Orden from "./Pages/Orden";
import PagoErroneo from "./Pages/PagoErroneo";
import PagoCorrecto from "./Pages/PagoCorrecto";
import Confirmacion from "./Modal/Confirmacion";
import React, { useContext } from "react";
function App() {
  const Agregado = useContext(Context_total);
  return (
    <Contex value>
      <Router>
        <div className="App">
          <Head />
        </div>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/contacto" exact>
            <Contacto />
          </Route>
          <Route path="/productos" exact>
            <Productos_page />
          </Route>
          <Route path="/ofertas" exact>
            <Ofertas />
          </Route>
          <Route path="/carrito" exact>
            <title>Carrito de Productos</title>

            <Carrito />
          </Route>
          <Route path="/carrito/orden">
            <Orden />
          </Route>
          <Route path="/carrito/Error" exact>
            <PagoErroneo />
          </Route>
          <Route path="/carrito/Correcto" exact>
            <PagoCorrecto />
          </Route>
        </Switch>
      </Router>
    </Contex>
  );
}

export default App;
