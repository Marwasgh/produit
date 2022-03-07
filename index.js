const express = require('express');
const authRoute = require ("./root/authentification");
const catRoute = require ("./root/categorieroot");
const proRoute = require ("./root/produitroot");
//koul manzid 7aja f root wama f model na3mlilha const lina (w louta fama zada)
const conRoute = require ("./root/contactroot");
const panRoute = require ("./root/panierroot");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use('/uploads', express.static('uploads'));
app.use('/api/auth', authRoute);
app.use('/api/cat', catRoute);
app.use('/api/pro', proRoute);
app.use('/api/panier', panRoute);

//lin nzidou app3
app.use('/api/con', conRoute);
app.use(express.json(), cors());
//appel a database.js
require('./database');

//serveur local 
app.listen(3000, () => {
    console.log("port started 3000");
});
