import express from "express";
import {
    deleteUser,
    getUser,
    getUserAllBookings,
    getUserPrevBookings,
    getUserReqBookings,
    getUsers,
    updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

//GET ALL BOOKING OF A USER
router.get("/:userId/bookingsmade", verifyUser, getUserAllBookings);

//GET ALL PREV BOOKING OF A USER
router.get("/bookingsdone/:username", verifyUser, getUserPrevBookings);

//GET ALL REQ BOOKING OF A USER
router.get("/bookingsreq/:username", verifyUser, getUserReqBookings);

export default router;