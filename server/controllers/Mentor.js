import Mentor from "../models/Mentor.js";
import Bookings from "../models/Bookings.js";

export const updateMentor = async (req, res, next) => {
    try {
        const updatedMentor = await Mentor.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedMentor);
    } catch (err) {
        next(err);
    }
};
// export const updateMentor = async (req, res, next) => {
//     try {
//         const newSlot = req.body.newSlot; // Assuming newSlot is present in req.body
//         const mentorEmail = req.params.email; // Assuming the email is passed as a parameter

//         const updatedMentor = await Mentor.findOneAndUpdate(
//             { email: mentorEmail },
//             { $push: { 'availability.slots': newSlot } },
//             { new: true }
//         );

//         if (!updatedMentor) {
//             // Handle the case where the mentor with the specified email is not found
//             return res.status(404).json({ message: 'Mentor not found' });
//         }

//         res.status(200).json(updatedMentor);
//     } catch (err) {
//         next(err);
//     }
// };
export const updateMentorAvailability = async (req, res, next) => {
    try {
        const { date, newSlot } = req.body; // Assuming date and newSlot are present in req.body
        const mentorEmail = req.params.email; // Assuming the email is passed as a parameter

        // Find the mentor by email
        const mentor = await Mentor.findOne({ email: mentorEmail });

        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }

        // Find the availability object with the given date
        const availabilityToUpdate = mentor.availability.find(avail => avail.date === date);

        if (!availabilityToUpdate) {
            return res.status(404).json({ message: 'Availability not found for the given date' });
        }

        // Update the slots array in the availability object
        availabilityToUpdate.slots.push(newSlot);

        // Save the mentor document with the updated availability
        await mentor.save();

        res.status(200).json(mentor);
    } catch (err) {
        next(err);
    }
};
export const deleteMentor = async (req, res, next) => {
    try {
        await Mentor.findByIdAndDelete(req.params.id);
        res.status(200).json("Mentor has been deleted.");
    } catch (err) {
        next(err);
    }
};
export const getMentor = async (req, res, next) => {
    try {
        const ourMentor = await Mentor.findOne({ email: req.params.email });
        res.status(200).json(ourMentor);
    } catch (err) {
        next(err);
    }
};
export const getMentors = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const allMentors = await Mentor.find({
            ...others,
            Price: { $gt: min | 1, $lt: max || 1000000 },
        }).limit(req.query.limit)
        res.status(200).json(allMentors)
    } catch (err) {
        next(err);
    }
};

export const getMentorBookings = async (req, res) => {
    try {
        const status = req.params.status;
        const Mentor = await Mentor.findOne({ username: req.params.username });
        const bookings = await Bookings.find({ reqBy: Mentor._id, status: status });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json(err);
    }
};