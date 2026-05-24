const express = require("express");
const router = express.Router();

const { saveIntegratedData, getIntegratedData } = require("../controllers/dataController");

router.get("/users", getIntegratedData);
router.get("/save", saveIntegratedData);

module.exports = router;
