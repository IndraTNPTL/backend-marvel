require("dotenv").config();
const axios = require("axios");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//! ROUTES FILES
const comicsRoutes = require("./routes/comics");
const charactersRoutes = require("./routes/characters");

//! LINKING ROUTES
app.use(comicsRoutes);
app.use(charactersRoutes);

app.get("/", async (req, res) => {
  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com?apiKey=${process.env.MY_API_KEY}`
  );
  return res.json({ data: response.data });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log(`🤖 Server started on port ${process.env.PORT}`);
});
