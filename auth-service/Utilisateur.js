const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Utilisateur = require('../auth-service/user.js');


router.post('/login', async (req, res) => {
    console.log(req.body);
  try {
    const { login, mdp } = req.body;
    const utilisateur = await Utilisateur.findOne({ login });
    if (!utilisateur) {

      return res.status(400).json({ message: "Utilisateur non trouvé" });
    }

    const password= await bcrypt.compare(mdp, utilisateur.mdp);
    if (!password) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    const token = jwt.sign({ userId: utilisateur._id }, 'votre_secret');

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur serveur");
  }
});

module.exports = router;
