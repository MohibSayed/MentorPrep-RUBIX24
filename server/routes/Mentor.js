import express from "express";
const router = express.Router()
import { deleteMentor, getMentor, getMentors, updateMentor, getMentorBookings } from "../controllers/Mentor.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//update
router.put("/:id", verifyAdmin, updateMentor)
//delete
router.delete("/:id", verifyAdmin, deleteMentor)
//get
router.get("/find/:MentorId", getMentor)
//get all
router.get("/", getMentors)
//GET ALL BOOKING OF A Mentor
router.get("/bookingsmade/:username/:status", verifyAdmin, getMentorBookings);

export default router