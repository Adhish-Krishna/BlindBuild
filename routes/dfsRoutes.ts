import express from "express";
import { dfsCycleDetection, dfsShortestPathLength } from "../controllers/dfsController.ts";

const router = express.Router();


// POST hidden logic endpoints
router.post("/problem1", dfsCycleDetection);    
router.post("/problem2", dfsShortestPathLength);   
export default router;