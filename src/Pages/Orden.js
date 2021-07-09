import React, { useContext, useEffect } from "react";
import BotonComprar from "../Components/BotonComprar";
import { Context_total } from "../Contexto/Contex";
import InputsForm from "../PageOrden/InputsForm";
function Orden() {
  const { PAGAR, Verificacion } = useContext(Context_total);
  useEffect(() => {}, [Verificacion]);

  return (
    <div className="orden--datos">
      <title>Orden de Pago</title>

      <section>
        <div className="option--input--datos">
          <div className="titulo--option">
            <h3>Datos de Envio</h3>
          </div>
          <div className="inputs--datos">
            <InputsForm />
          </div>
        </div>
      </section>
      <section id="paypal">
        {Verificacion ? (
          <div className="option--pago">
            <h3>Metodo de Pago</h3>
            <BotonComprar total={PAGAR} />
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default Orden;
