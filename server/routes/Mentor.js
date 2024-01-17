import express from "express";
const router = express.Router()
import { deleteMentor, getMentor, getMentors, updateMentor, getMentorBookings } from "../controllers/Mentor.js";

//update
router.put("/:id", updateMentor)
//delete
router.delete("/:id", deleteMentor)
//get
router.get("/find/:MentorId", getMentor)
//get all
router.get("/", getMentors)
//GET ALL BOOKING OF A Mentor
router.get("/bookingsmade/:username/:status", getMentorBookings);

export default router