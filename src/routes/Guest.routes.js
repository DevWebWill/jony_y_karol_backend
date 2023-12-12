import express from "express";
import { getGuest, updateGuest } from "../controllers/Guest.controller.js";

const router = express.Router();

router.post('/get-guest', getGuest);

router.post('/update-guest', updateGuest);

export default router;