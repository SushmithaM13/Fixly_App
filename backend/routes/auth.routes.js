const express = require('express');
const { register, login }=require("../controllers/auth.controllers");
const router = express.Router();

router.post('/signup', register);

router.post('/login', (req, res, next) => {
  console.log("Login route hit");
  next();
}, login);

module.exports = router;
