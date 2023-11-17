require("dotenv").config();

const express = require("express");
const router = express.Router();

const axios = require("axios");

//! ROUTES

// ? GET ALL CHARACTERS
router.get("/characters", async (req, res) => {
  try {
    const { page, name } = req.query;

    const limit = 100;

    let pageToSend = 1;
    if (page) {
      pageToSend = page;
    }

    const skip = (pageToSend - 1) * limit;

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?name=${name}&skip=${skip}&limit=${limit}&apiKey=${process.env.MY_API_KEY}`
    );
    return res.json({ data: response.data });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching all characters" });
  }
});

// ? GET CHARACTER BY CHARACTERS ID
router.get("/character/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.MY_API_KEY}`
    );
    return res.json({ data: response.data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message:
        "An error occurred while fetching characterr info by character ID",
    });
  }
});

module.exports = router;
