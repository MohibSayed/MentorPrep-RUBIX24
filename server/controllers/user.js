import User from "../models/User.js";
import Bookings from "../models/Bookings.js";

export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        next(err);
    }
}
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
    } catch (err) {
        next(err);
    }
}
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
}
export const getUserAllBookings = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });
        let bookings = ""
        if (user.Profession != "user") {
            bookings = await Bookings.find({ reqFor: user._id });
        } else {
            bookings = await Bookings.find({ reqBy: user._id });
        }
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json(err);
    }
};
export const getUserPrevBookings = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        let bookings = ""
        if (Bookings.status != "done") {
            bookings = await Bookings.find({ reqBy: user._id });
        } else {
            bookings = await Bookings.find({ reqFor: user._id });
        }
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json(err);
    }
};
export const getUserReqBookings = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        let bookings = ""
        if (Bookings.status != "requested") {
            bookings = await Bookings.find({ reqBy: user._id });
        } else {
            bookings = await Bookings.find({ reqFor: user._id });
        }
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json(err);
    }
};