import React from "react";

function PagoCorrecto() {
  function Imprimir() {
    window.print();
  }
  return (
    <div className="PagoCorrecto">
      <title>Pago Correcto </title>

      <div className="centrar--factura">
        <div className="cont__factura">
          <div className="head--factura">
            <div className="titulo--factura">
              <h3>Factura</h3>
            </div>
            <div className="cliente--factura">
              <div className="datos--cliente">
                <div className="dato--cliente">
                  <p> Nombre : </p> <p></p>
                </div>
                <div className="dato--cliente">
                  <p>Fecha : </p> <p>d</p>
                </div>
                <div className="dato--cliente">
                  <p>Cedula : </p> <p> 5095590</p>
                </div>
                <div className="dato--cliente">
                  <p>direccion : </p>
                  <p> dsdcvf</p>
                </div>
              </div>
            </div>
          </div>
          <div className="productos--factura">
            <div className="cont--productos--factura">
              <div className="producto--factura">
                <div className="enacabezado--factura">
                  <p>Producto</p>
                </div>
                <p>laptop</p>
              </div>
              <div className="cantidad--factura">
                <div className="enacabezado--factura">
                  <p>Cantidad</p>
                </div>
                <p>5</p>
              </div>
              <div className="subtotal--factura">
                <div className="enacabezado--factura">
                  <p>Subtotal</p>
                </div>

                <p> $ </p>
              </div>
            </div>
          </div>
          <div className="total--factura">
            <p>Total: </p>
            <p>$ </p>
          </div>

          <div className="imprimir">
            <button onClick={() => window.print()}>Imprimir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagoCorrecto;
