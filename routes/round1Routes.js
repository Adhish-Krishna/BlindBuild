const express = require("express");
const {
  translateKeyboard,
  bitFlip,
  knightValidator,
  combineColors,
  vowelOrbit,
  gravityProcess,
  HNP,RFC, TDL, PMF,Mirror,
  evenOddGate,
  alphabetPosition,
  wordLengthCounter


} = require("../controllers/round1Controller");
console.log("✅ Round1 routes file loaded")

const router = express.Router();

//Keyboard Cipher
router.post("/problem1", translateKeyboard);

//Bit‑Flip Mirror
router.post("/problem2", bitFlip);

//Chess Knight Validator
router.post("/problem3", knightValidator);

//Color Mixer
router.post("/problem4", combineColors);

// 5. Vowel Orbit
router.post("/problem5", vowelOrbit);

//Gravity Well
router.post("/problem6", gravityProcess);
router.post("/problem7",HNP);
router.post("/problem8",RFC);
router.post("/problem9",TDL);
router.post("/problem10",PMF);
router.post ("/problem11",Mirror)
router.post ("/problem12",evenOddGate)
router.post ("/problem13",alphabetPosition)
router.post ("/problem14",wordLengthCounter)




module.exports = router;