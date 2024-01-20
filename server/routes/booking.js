import express from "express"; updateBooking
import { createBooking, deleteBooking, getBooking, getBookings, updateBooking, getMenteeBookings,uploadAudio } from "../controllers/booking.js";
const router = express.Router()
import multer from "multer"
import { fileURLToPath } from 'url';
  import { dirname } from 'path';
  import fs from 'fs';
  import { promisify } from 'util';
  import path from "path"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null,'uploads'); // Folder where the file will be saved
    },
    filename: (req, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
  });
  
  const upload = multer({ storage: storage });
  
  
//   const uploadsDirectory = "C:/Users/thosp/OneDrive/Documents/GitHub/MentorPrep-RUBIX24/server/controllers/uploads"
//   console.log(uploadsDirectory)

// // Serve static files from the 'uploads' directory
// app.use('/uploads', express.static(uploadsDirectory));
router.post("/uploadAudio",upload.single('audio'),uploadAudio);
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