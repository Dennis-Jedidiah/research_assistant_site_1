import path from "node:path";
import dotenv from "dotenv";
import express from "express";
import Stripe from "stripe";
import cors from "cors";
import { sendBookingEmail } from "./mailer.js";

// Resolve .env next to this file rather than the current working directory, so
// the server also finds it when started from the workspace root.
dotenv.config({ path: path.join(import.meta.dirname, ".env") });


// imports the express and cors modules for the server.
// CORS allows server to communicate with the frontend since they're going to be hosted on different ports during development.

const stripe = new Stripe(process.env.REACT_APP_TEST_KEY);
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.post("/booking", async (req, res) => {
  const { name, email, service, notes, contact_agreement } = req.body ?? {};
  const errors = [];

  if (!name?.trim()) errors.push("Please enter your name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email?.trim() ?? ""))
    errors.push("Please enter a valid email address.");
  if (!service?.trim()) errors.push("Please choose a service.");
  if (!contact_agreement)
    errors.push("Please agree to the terms.");

  if (errors.length) {
    return res.status(400).json({ error: errors.join(" ") });
  }

  try {
    await sendBookingEmail({
      name: name.trim(),
      email: email.trim(),
      service: service.trim(),
      notes: notes?.trim() ?? "",
    });
    res.json({ ok: true });
  } catch (error) {
    console.error("Failed to send booking email:", error.message);
    res
      .status(500)
      .json({ error: "Could not send your request. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
