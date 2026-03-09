const express = require("express");
const {
  translateKeyboard,
  bitFlip,
  knightValidator,
  combineColors,
  vowelOrbit,
  gravityProcess
} = require("../controllers/round1Controller");

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

module.exports = router;