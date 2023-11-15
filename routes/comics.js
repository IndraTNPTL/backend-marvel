require("dotenv").config();

const express = require("express");
const router = express.Router();

const axios = require("axios");

//! ROUTES

// ? GET ALL COMICS
router.get("/comics", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MY_API_KEY}`
    );
    return res.json({ data: response.data });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching all comics" });
  }
});

// ? GET COMICS BY CHARACTERS ID
router.get("/comics/:characterId", async (req, res) => {
  try {
    const characterId = req.params.characterId;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${process.env.MY_API_KEY}`
    );
    return res.json({ data: response.data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred while fetching comics by character ID",
    });
  }
});

// ? GET COMIC BY COMIC ID
router.get("/comic/:comicId", async (req, res) => {
  try {
    const comicId = req.params.comicId;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${process.env.MY_API_KEY}`
    );
    return res.json({ data: response.data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "An error occurred while fetching comic info by comic ID",
    });
  }
});

module.exports = router;
