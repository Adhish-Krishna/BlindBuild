const express = require("express");
const { LIS, JSP, SMT, DWC, MM, nthR, Perm, GCD,perfect } = require("../controllers/mathController");

const router = express.Router();


router.post("/problem1", MM);   // Matrix multiplication
router.post("/problem2", nthR);
router.post("/problem3",Perm) ;// Nth root
router.post("/problem4",GCD) ;// GCD
router.post("/problem9",perfect) ;// perfect
router.post("/problem5", LIS);
router.post("/problem6", JSP);
router.post("/problem7", SMT);
router.post("/problem8", DWC);


module.exports = router;