import express from "express";
import {MM,nthR} from "../controllers/mathController.ts";

const router = express.Router();


// POST hidden logic endpoints
router.post("/problem1", MM);       
router.post("/problem2", nthR);   

export default router;