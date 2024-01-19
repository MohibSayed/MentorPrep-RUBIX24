import express from "express";
import {
    deleteMentee,
    getMentee,
    getMenteeBookings,
    getMentees,
    updateMentee,
    findTopMentorsForInterests
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
router.get("/bookingsmade/:email", getMenteeBookings);

//GET TOP MENTORS FOR INTERESTS
router.get("/topmentors/:username", findTopMentorsForInterests);

export default router;