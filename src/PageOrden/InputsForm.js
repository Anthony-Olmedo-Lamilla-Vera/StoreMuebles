import React, { useContext, useEffect, useState } from "react";
import { Context_total } from "../Contexto/Contex";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import NotInterestedTwoToneIcon from "@material-ui/icons/NotInterestedTwoTone";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import Component_Form from "./Component_Form";
function InputsForm() {
  const [Nombre, setNombre] = useState({ campo: "", valido: null });
  const [Apellidos, setApellidos] = useState({ campo: "", valido: null });
  const [Di, setDi] = useState({ campo: " ", valido: null });
  const [Telefono, setTelefono] = useState(0);
  const [Direccion, setDireccion] = useState({ campo: "", valido: null });
  const [nCalle, setnCalle] = useState({ campo: "", valido: null });
  const [CalleRef, setCalleRef] = useState({ campo: "", valido: null });
  const [Provincia, setProvincia] = useState({ campo: "", valido: null });
  const [Ciudad, setCiudad] = useState({ campo: "", valido: null });
  const [Error, setError] = useState(false);

  const { Verificacion, setVerificacion, TOTAL, PAGAR, Carrito } =
    useContext(Context_total);
  useEffect(() => {}, [Verificacion]);

  function Continuar() {
    if (
      Nombre.valido === "true" &&
      Apellidos.valido === "true" &&
      Di.valido === "true" &&
      Telefono.valido === "true" &&
      Direccion.valido === "true" &&
      nCalle.valido === "true" &&
      CalleRef.valido === "true" &&
      Provincia.valido === "true" &&
      Ciudad.valido === "true"
    ) {
      setVerificacion(true);
    } else setVerificacion(false);
  }

  return (
    <div>
      <div className="inputs">
        <Component_Form
          tipo="text"
          placeholder="Ingrese un nombre"
          estado={Nombre}
          setEstado={setNombre}
          titulo="Nombre"
          leyenda="Campo Obligatorio y/o ingrese correctamente"
        />
        <Component_Form
          tipo="text"
          placeholder="Ingrese Apellidos"
          estado={Apellidos}
          setEstado={setApellidos}
          titulo="Apellidos"
          leyenda="Campo Obligatorio y/o ingrese correctamente"
        />
        <Component_Form
          leyenda="Campo Obligatorio y/o ingrese correctamente"
          tipo="number"
          placeholder="Ingrese Cedula"
          estado={Di}
          setEstado={setDi}
          titulo="Cedula"
        />
        <Component_Form
          tipo="number"
          leyenda="Campo Obligatorio y/o ingrese correctamente"
          placeholder="Ingrese Numero de Telefono"
          estado={Telefono}
          setEstado={setTelefono}
          titulo="N° de Telefono"
        />

        <Component_Form
          tipo="text"
          leyenda="Campo Obligatorio y/o ingrese correctamente"
          placeholder="ingrese Provincia"
          estado={Provincia}
          setEstado={setProvincia}
          titulo="Provincia"
        />
        <Component_Form
          leyenda="Campo Obligatorio y/o ingrese correctamente"
          tipo="text"
          placeholder="ingrese Ciudad"
          estado={Ciudad}
          setEstado={setCiudad}
          titulo="Ciudad"
        />
        <Component_Form
          leyenda="Campo Obligatorio y/o ingrese correctamente"
          tipo="text"
          placeholder="ingrese Direccion"
          estado={Direccion}
          setEstado={setDireccion}
          titulo="Direccion"
        />
        <Component_Form
          tipo="text"
          leyenda="Campo Obligatorio y/o ingrese correctamente"
          placeholder="ingrese Calle de Referencia"
          estado={CalleRef}
          setEstado={setCalleRef}
          titulo="Calle de Referencia"
        />
        <Component_Form
          tipo="text"
          leyenda="Campo Obligatorio y/o ingrese correctamente"
          placeholder="ingrese N° de calle "
          estado={nCalle}
          setEstado={setnCalle}
          titulo="N° de calle "
        />
      </div>
      <div className="button--dato">
        <button href="paypal" onClick={Continuar}>
          Continuar
        </button>
        {Verificacion ? (
          <div className="verif">
            <CheckCircleOutlineOutlinedIcon
              style={{ color: "#35b865", fontSize: 30 }}
            />
            <p
              style={{ marginLeft: 20, display: "flex", alignItems: "center" }}
            >
              Deslize hacia abajo{" "}
              <ArrowDownwardRoundedIcon style={{ fontSize: 25 }} />
            </p>
          </div>
        ) : (
          <div className="verif">
            <NotInterestedTwoToneIcon
              color="secondary"
              style={{ fontSize: 30 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default InputsForm;
