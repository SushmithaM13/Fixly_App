const express = require('express');
const {createBooking }=require("../controllers/booking.controllers");
const auth=require("../middleware/auth.middleware");
const router = express.Router();

router.post('/', auth, createBooking );

module.exports = router;