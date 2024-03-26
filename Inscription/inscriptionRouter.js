const express = require('express');
const router = express.Router();
const Inscription = require('../Inscription/inscription.js');
const Utilisateur = require('../auth-service/Utilisat.js');
const Evenement = require('../Evenement/evenement.js');

router.get('/all', async (req, res) => {
  try {
    const inscription = await Inscription.find();
    res.json(inscription);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur serveur");
  }
});

router.get('/utilisateur/:inscriptionname', async (req, res) => {
  try {
    const inscriptionName = req.params.inscriptionname;
    const utilisateur = await Utilisateur.find({ inscription: inscriptionName });
    res.json(utilisateur);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur serveur");
  }
});

router.get('/evenement/:inscriptionname', async (req, res) => {
  try {
    const inscriptionName = req.params.inscriptionname;
    const evenement = await Evenement.find({ inscription: inscriptionName });
    res.json(evenement);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur serveur");
  }
});

router.post('/add', async (req, res) => {
  try {
    const { utilisateur_id, evenement_id } = req.body;

    const inscription = new Inscription({  utilisateur_id, evenement_id });
    await inscription.save();

    res.status(201).json({ message: "ajouté avec succès" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur serveur");
  }
});



module.exports = router;
