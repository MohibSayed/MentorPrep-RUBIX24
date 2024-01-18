import express from "express";
import { createBooking, deleteBooking, getBooking, getBookings, updateBooking } from "../controllers/Booking.js";
const router = express.Router()

//create
router.post("/:ReqByEmail", createBooking)
//update
router.put("/:id", updateBooking)
//delete
router.delete("/:id/:professionId", deleteBooking)
//get
router.get("/:id", getBooking)
//get all
router.get("/", getBookings)

export default router