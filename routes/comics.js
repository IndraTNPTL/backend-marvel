require("dotenv").config();

const express = require("express");
const router = express.Router();

const axios = require("axios");

//! ROUTES
router.get("/comics", async (req, res) => {
  const response = await axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MY_API_KEY}`
  );
  return res.json({ data: response.data });
});

module.exports = router;
