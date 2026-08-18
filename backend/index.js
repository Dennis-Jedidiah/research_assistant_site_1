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

app.post("/", async (req, res) => {
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
