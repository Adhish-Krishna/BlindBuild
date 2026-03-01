import express from "express";
import {matrixMultiplication,nthRoot} from "../controllers/mathController.ts";

const router = express.Router();


// POST hidden logic endpoints
router.post("/problem1", matrixMultiplication);       
router.post("/problem2", nthRoot);   

export default router;