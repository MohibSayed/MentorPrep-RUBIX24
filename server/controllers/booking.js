
import Booking from "../models/Bookings.js"
import Mentor from "../models/Mentor.js"
import { v4 as uuidv4 } from 'uuid';
import path from "path"
import multer from "multer"
import createError from "http-errors"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import { promisify } from 'util';

// export const createBooking = async (req, res, next) => {
//     const reqby = req.params.ReqByEmail;
//     const newBooking = new Booking({
//         ...req.body,
//         meetingLink: uuidv4(),
//     });
//     try {
//         if (reqby == req.body.reqBy) {
//             const savedBooking = await newBooking.save()
//             res.status(201).json(savedBooking)
//         } else {
//             next(createError(403, "You are not authorized!"))
//         }
//     } catch (error) {
//         next(error)
//     }
// }
// export const createBooking = async (req, res, next) => {
//     const reqby = req.params.ReqByEmail;
//     const {reqFor,time,date} = req.body;
//     const mentorEmail = reqFor;
//     const newBooking = new Booking({
//         ...req.body,
//         meetingLink: uuidv4(),
//     });
//     try {
//         if (reqby == req.body.reqBy) {
//             const savedBooking = await newBooking.save()
//             const mentor = await Mentor.findOne({ mentorEmail });

//             const availabilityToUpdate = mentor.availability.find(avail => avail.date === date);

//             if (availabilityToUpdate) {
//                 const slotToUpdate = availabilityToUpdate.slots.find(slot => slot.time === time);

//                 if (slotToUpdate) {
//                     // Increase the filled attribute by 1
//                     slotToUpdate.filled += 1;
//                 }
//             }
//             await mentor.save();
//             res.status(201).json(savedBooking)
//         } else {
//             next(createError(403, "You are not authorized!"))
//         }
//     } catch (error) {
//         next(error)
//     }
// }
// export const createBooking = async (req, res, next) => {
//     const reqby = req.params.ReqByEmail;
//     const {reqFor,time,date,price} = req.body;
//     const mentorEmail = reqFor;
//     const newBooking = new Booking({
//         ...req.body,
//         meetingLink: uuidv4(),
//     });
//     try {
//         if (reqby == req.body.reqBy) {
//             const savedBooking = await newBooking.save()
//             const mentor = await Mentor.findOne({ mentorEmail });
//             mentor.totalEarning += price; 
//             const availabilityToUpdate = mentor.availability.find(avail => avail.date === date);

//             if (availabilityToUpdate) {
//                 const slotToUpdate = availabilityToUpdate.slots.find(slot => slot.time === time);

//                 if (slotToUpdate) {
//                     // Increase the filled attribute by 1
//                     slotToUpdate.filled += 1;
//                 }
//             }
//             await mentor.save();
//             res.status(201).json(savedBooking)
//         } else {
//             next(createError(403, "You are not authorized!"))
//         }
//     } catch (error) {
//         next(error)
//     }
// }
export const createBooking = async (req, res, next) => {
    const reqby = req.params.ReqByEmail;
    const { reqFor, time, date, price } = req.body;
    const mentorEmail = reqFor;
    const newBooking = new Booking({
        ...req.body,
        meetingLink: uuidv4(),
    });
    try {
        if (reqby == req.body.reqBy) {
            const savedBooking = await newBooking.save()
            const mentor = await Mentor.findOne({ email: mentorEmail });
            mentor.totalEarning += price;   
            const availabilityToUpdate = mentor.availability.find(avail => avail.date === date);

            if (availabilityToUpdate) {
                const slotToUpdate = availabilityToUpdate.slots.find(slot => slot.time === time);

                if (slotToUpdate) {
                    // Increase the filled attribute by 1
                    slotToUpdate.filled += 1;
                }
            }
            await mentor.save();
            res.status(201).json(savedBooking)
        } else {
            next(createError(403, "You are not authorized!"))
        }
    } catch (error) {
        next(error)
    }
}
export const updateBooking = async (req, res, next) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedBooking);
    } catch (err) {
        next(err);
    }
};
export const deleteBooking = async (req, res, next) => {
    const BookingId = req.params.id
    try {
        await Booking.findByIdAndDelete(BookingId);
        res.status(200).json("Booking has been deleted.");
    } catch (err) {
        next(err);
    }
};
export const getBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        res.status(200).json(booking);
    } catch (err) {
        next(err);
    }
};
export const getBookings = async (req, res, next) => {
    const reqForEmail = req.params.emailid;
    try {
        const allBookings = await Booking.find({ reqFor: reqForEmail })
        res.status(200).json(allBookings)
    } catch (err) {
        next(err);
    }
};
export const getMenteeBookings = async (req, res, next) => {
    const reqByEmail = req.params.emailid;
    try {
        const allBookings = await Booking.find({ reqBy: reqByEmail })
        res.status(200).json(allBookings)
    } catch (err) {
        next(err);
    }
};

export const uploadAudio = async (req,res,next) => {
    try{
        const uniqueFilename = uuidv4(); // Implement your own logic for generating a unique filename
        const __filename = fileURLToPath(import.meta.url);
    // Get the directory path
    const __dirname = dirname(__filename);
        const filePath = path.join(__dirname, 'uploads', req.file.filename);
        const fileUrl = `http://localhost:8800/uploads/${uniqueFilename}`

        const moveFile = promisify(fs.rename);
        await moveFile(req.file.path, filePath);

        res.status(200).json({ url: fileUrl });
    }
    catch(err){
        next(err);
    }
}
