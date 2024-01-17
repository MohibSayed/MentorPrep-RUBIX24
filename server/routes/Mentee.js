import express from "express";
import {
    deleteMentee,
    getMentee,
    getMenteeBookings,
    getMentees,
    updateMentee,
} from "../controllers/Mentee.js";

const router = express.Router();

//UPDATE
router.put("/:id", updateMentee);

//DELETE
router.delete("/:id", deleteMentee);

//GET
router.get("/:id", getMentee);

//GET ALL
router.get("/", getMentees);

//GET BOOKING OF A Mentee
router.get("/bookingsmade/:username/:status", getMenteeBookings);

export default router;