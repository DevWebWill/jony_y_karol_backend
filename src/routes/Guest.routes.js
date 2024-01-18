import express from "express";
import { getGuest, getGuests, updateGuest } from "../controllers/Guest.controller.js";

const router = express.Router();

router.post('/get-guest', getGuest);

router.get('/get-guests', getGuests);

router.post('/update-guest', updateGuest);

export default router;