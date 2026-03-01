import express from "express";
import { dCD, dSPL } from "../controllers/dfsController.ts";

const router = express.Router();


// POST hidden logic endpoints
router.post("/problem1", dCD);    
router.post("/problem2", dSPL);   
export default router;