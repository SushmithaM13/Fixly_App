const express = require('express');
const {getAllProviders}=require("../controllers/provider.controller");
const auth=require("../middleware/auth.middleware");
const router = express.Router();

router.get('/', auth, getAllProviders);

module.exports = router;