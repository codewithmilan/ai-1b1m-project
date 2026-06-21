import express from "express";
import { getCityAQI } from "../controllers/airController.js";

const router = express.Router();

router.post("/city-aqi", getCityAQI);

export default router;
