const cors = require("cors");
const express = require("express");
const request = require("request");

const app = express();

app.use(cors());
const CLIENT__ID =
  "AQZxc-AEhpFnENcX4zII2TidS1lhbOAU-ilV-AlZoClmm883ibkk6VuUlGLsf4FEbKqRclsO2X9z-1bI";
const SECRET =
  "EAj8EaD4iJQG7E3ukOzHqi9VPtq7yDd8yy7n4_LJbs7cPu3WFR7MHwA1xha4P4LBKZtXUcXj-8BONx1Q";
const PAYPal_API = "https://api-m.sandbox.paypal.com";

function CreatePayment(req, res) {
  const user = {
    user: CLIENT__ID,
    pass: SECRET,
  };
  const body = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "150",
        },
      },
    ],
    application_context: {
      brand_name: "Muebleria ",
      landing_page: "NO_PREFERENCE",
      user_action: "PAY_NOW",
      return_url: "http://localhost:3000/carrito",
      cancel_url: "http://localhost:3000/carrito ",
    },
  };
  request.post(
    `${PAYPal_API}/v2/checkout/orders`,
    {
      user,
      body,
      json: true,
    },
    (err, response) => {
      res.json({ data: response.body });
    }
  );
}
app.post("/Pago", CreatePayment);
app.listen(5000, () => {
  console.log("A GANAR DINERO");
});
