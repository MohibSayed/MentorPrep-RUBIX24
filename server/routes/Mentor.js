import express from "express";
const router = express.Router()
import { deleteMentor, getMentor, getMentors, updateMentor, getMentorBookings, updateMentorAvailability } from "../controllers/Mentor.js";

//update
router.put("/:id", updateMentor)

router.post("/:email",updateMentorAvailability)
//delete
router.delete("/:id", deleteMentor)
//get
router.get("/find/:email", getMentor)
//get all
router.get("/", getMentors)
//GET ALL BOOKING OF A Mentor
router.get("/bookingsmade/:username/:status", getMentorBookings);

export default router