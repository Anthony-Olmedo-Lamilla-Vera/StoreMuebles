import React, { useRef } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function BotonComprar(props) {
  const PayPalButton = window.paypal.Buttons.driver("react", {
    React,
    ReactDOM,
  });
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: props.total,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      console.log(details.status);
      window.location.replace("http://localhost:3000/carrito/Correcto");
    });
  };
  const onCancel = (data, actions) => {
    return actions.order.capture().then((details) => {
      console.log(details);
      window.location.replace("http://localhost:3000/carrito/Error");
    });
  };

  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => console.log(onApprove(data, actions))}
      onCancel={(data, actions) => console.log(onCancel(data, actions))}
    />
  );
}

export default BotonComprar;
