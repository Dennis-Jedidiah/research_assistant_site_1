const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const stripe = require("stripe")(process.env.REACT_APP_TEST_KEY);
const cors = require("cors");

// imports the express and cors modules for the server.
// CORS allows server to communicate with the frontend since they're going to be hosted on different ports during development.

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.post("/checkout", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: {
              name: "Pricing Plan",
            },
            unit_amount: 199,
          },
          quantity: 1,
        },
      ],
      success_url:
        "https://dashboard.stripe.com/workbench/blueprints/one-time-payment/checkout-chapter?confirmation-redirect=create-checkout-session",
      cancel_url:
        "https://dashboard.stripe.com/workbench/blueprints/one-time-payment/checkout-chapter?confirmation-redirect=create-checkout-session",
    });

    res.send({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
