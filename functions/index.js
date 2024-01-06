// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripeSecretKey = require("./config");
// eslint-disable-next-line max-len
const stripe = require("stripe")(stripeSecretKey);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received BOOM!!! for this amount  >>> ", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "INR",
      description: "dummy payment",
      payment_method_types: ["card"],
      shipping: {
        name: "test",
        address: {
          country: "IN",
        }, // 4000003560000008 domestic card number (India)
      },
    });

    console.log("PaymentIntent:", paymentIntent);

    // OK - Created
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating PaymentIntent: ", error);
    res.status(500).send({error: "Failed to create PaymentIntent"});
  }
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-e0935/us-central1/api
