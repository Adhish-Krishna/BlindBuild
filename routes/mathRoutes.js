const express = require("express");
const router = express.Router();
const { MM, nthR, LIS, JSP, SMT, DWC } = require("../controllers/mathController");

router.post("/problem1", MM);
router.post("/problem2", nthR);
router.post("/problem3", LIS);
router.post("/problem4", JSP);
router.post("/problem5", SMT);
router.post("/problem6", DWC);

module.exports = router;