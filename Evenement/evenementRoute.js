const express = require('express');
const router = express.Router();
const Evenement = require('../Evenement/evenemet.js');


router.post('/add', async (req, res) => {
  try {
    const { titre,description ,date,lieu,categorie } = req.body;

    const evenement = new Evenement({ titre,description ,date,lieu,categorie });
    await evenement.save();

    res.status(201).json({ message: "Recette ajoutée avec succès" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur serveur");
  }
});