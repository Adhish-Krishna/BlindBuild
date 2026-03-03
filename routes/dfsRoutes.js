const express = require("express");
const router = express.Router();
const { dCD, dSPL, CIS } = require("../controllers/dfsController");

router.post("/problem1", dCD);
router.post("/problem2", dSPL);
router.post("/problem3", CIS);

module.exports = router;