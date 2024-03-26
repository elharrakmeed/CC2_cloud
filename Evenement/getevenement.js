const express = require('express');
const router = express.Router();
const Evenement = require('../Evenement/evenemet.js');

router.get('/all', async (req, res) => {
  try {
    const evenement = await evenement.find();
    res.json(evenement);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur serveur");
  }
});