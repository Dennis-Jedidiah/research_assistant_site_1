import path from "node:path";
import dotenv from "dotenv";
import express from "express";
import Stripe from "stripe";
import cors from "cors";

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

app.post("/", async (req, res) => {
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
