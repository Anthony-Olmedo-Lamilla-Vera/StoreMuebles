import React from "react";

function Form() {
  return (
    <div className="Form--contact">
      <form
        encType="text/plain"
        action="mailto:anthony.lamilla@gmail.com"
        method="POST"
        subject="hol"
      >
        <input type="text" name="titulo" placeholder="Nombre" required />
        <input required type="tel" name=" tel" placeholder="Telefono" />
        <input type="text" name="email" placeholder="Correo Electronico" />
        <textarea
          name="text"
          required
          placeholder="Descripcion"
          editable="false"
          rows="4"
          cols="30"
        ></textarea>
        <button type="submit"> ENVIAR </button>
      </form>
    </div>
  );
}

export default Form;
