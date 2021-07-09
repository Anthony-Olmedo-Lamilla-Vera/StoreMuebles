import React from "react";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function Component_Form({
  titulo,
  placeholder,
  leyenda,
  err,
  tipo,
  estado,
  setEstado,
}) {
  const onChange = (e) => {
    setEstado({ ...estado, campo: e.target.value });
    console.log(estado);
  };

  const Validacion = () => {
    if (estado.campo === "") {
      setEstado({ ...estado, valido: "false" });
    } else {
      setEstado({ ...estado, valido: "true" });
    }
  };
  return (
    <div className="C--input">
      <p>{titulo} </p>
      <div className="Cont--input">
        <input
          type={tipo}
          placeholder={placeholder}
          value={estado.campo}
          onChange={(e) => onChange(e)}
          onKeyUp={Validacion}
        />
        {estado.valido === "true" ? (
          <p style={{ display: "flex", color: "#35b865", marginLeft: -30 }}>
            <CheckCircleOutlineOutlinedIcon />
          </p>
        ) : (
          ""
        )}
      </div>
      {estado.valido === "false" ? (
        <div className="err--input">
          <p>{leyenda} </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Component_Form;
