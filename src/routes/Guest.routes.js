import express from "express";
import { getGuest, getGuests, updateGuest, createGuest, deleteGuest } from "../controllers/Guest.controller.js";

const router = express.Router();

router.post('/get-guest', getGuest);

router.get('/get-guests', getGuests);

router.post('/update-guest', updateGuest);

router.post('/create-guest', createGuest);

router.post('/delete-guest', deleteGuest);

export default router;