import express from "express"; updateBooking
import { createBooking, deleteBooking, getBooking, getBookings, updateBooking, getMenteeBookings } from "../controllers/booking.js";
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
router.get("/bringBookings/:emailid", getBookings)
router.get("/bringMenteeBookings/:emailid", getMenteeBookings)
export default router