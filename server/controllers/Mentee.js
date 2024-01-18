import Mentee from "../models/Mentee.js";
import Bookings from "../models/Bookings.js";

export const updateMentee = async (req, res, next) => {
    try {
        const updatedMentee = await Mentee.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedMentee);
    } catch (err) {
        next(err);
    }
}
export const deleteMentee = async (req, res, next) => {
    try {
        await Mentee.findByIdAndDelete(req.params.id);
        res.status(200).json("Mentee has been deleted.");
    } catch (err) {
        next(err);
    }
}
export const getMentee = async (req, res, next) => {
    try {
        const Mentee = await Mentee.findById(req.params.id);
        res.status(200).json(Mentee);
    } catch (err) {
        next(err);
    }
}
export const getMentees = async (req, res, next) => {
    try {
        const Mentees = await Mentee.find();
        res.status(200).json(Mentees);
    } catch (err) {
        next(err);
    }
}
export const getMenteeBookings = async (req, res) => {
    try {
        const status = req.params.status;
        const Mentee = await Mentee.findOne({ username: req.params.username });
        const bookings = await Bookings.find({ reqBy: Mentee._id, status: status });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json(err);
    }
};