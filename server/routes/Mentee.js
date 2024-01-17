import express from "express";
import {
    deleteMentee,
    getMentee,
    getMenteeBookings,
    getMentees,
    updateMentee,
} from "../controllers/Mentee.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, updateMentee);

//DELETE
router.delete("/:id", verifyUser, deleteMentee);

//GET
router.get("/:id", verifyUser, getMentee);

//GET ALL
router.get("/", verifyAdmin, getMentees);

//GET BOOKING OF A Mentee
router.get("/bookingsmade/:username/:status", verifyUser, getMenteeBookings);

export default router;