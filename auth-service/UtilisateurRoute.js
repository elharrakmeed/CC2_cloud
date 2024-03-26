const express = require('express');
const router = express.Router();
const Utilisateur = require('../auth-service/Utilisateur.js');

router.get('/all', async (req, res) => {
  try {
    const utilisateur = await utilisateur.find();
    res.json(utilisateur);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur serveur");
  }
});

router.post('/add', async (req, res) => {
  Utilisateur = mongoose.model('Utilisateur' ,authorSchema, 'BaseD');
    Utilisateur.insertMany([
    {nom:"zaidi",login: "zaidi12", email:"zaidi@gmail.com"},
    
    
    ]).then((docs) => {
    console.log("Inserted");
    console.log(docs);
    }).catch((e)=>{console.log(e)})
});



module.exports = router;
