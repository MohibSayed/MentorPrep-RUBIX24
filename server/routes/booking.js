import express from "express"; updateBooking
import { createBooking, deleteBooking, getBooking, getBookings, updateBooking } from "../controllers/Booking.js";
const router = express.Router()
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

//create
router.post("/:ReqById", verifyUser, createBooking)
//update
router.put("/:id", verifyAdmin, updateBooking)
//delete
router.delete("/:id/:professionId", verifyAdmin, deleteBooking)
//get
router.get("/:id", getBooking)
//get all
router.get("/", getBookings)

export default router