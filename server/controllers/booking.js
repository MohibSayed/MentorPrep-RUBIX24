
import Booking from "../models/Bookings.js"
import { v4 as uuidv4 } from 'uuid';
import createError from "http-errors"

export const createBooking = async (req, res, next) => {
    const reqby = req.params.ReqByEmail;
    const newBooking = new Booking({
        ...req.body,
        meetingLink: uuidv4(),
    });
    try {
        if (reqby == req.body.reqBy) {
            const savedBooking = await newBooking.save()
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
    const  reqForEmail  = req.params.emailid;
    try {
        const allBookings = await Booking.find({ reqFor: reqForEmail })
        res.status(200).json(allBookings)
    } catch (err) {
        next(err);
    }
};
