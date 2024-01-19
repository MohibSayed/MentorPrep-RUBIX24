import Mentee from "../models/Mentee.js";
import Bookings from "../models/Bookings.js";
import Mentor from "../models/Mentor.js";

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
export const getMenteeBookings = async (req, res, next) => {
    try {
        // const status = req.params.status;
        const myMentee = await Mentee.findOne({ email: req.params.email });
        const bookings = await Bookings.find({ reqBy: myMentee.email, recording: true });
        res.status(200).json(bookings);
    } catch (err) {
        next(err);
    }
};
export const findTopMentorsForInterests = async (req, res) => {
    try {
        const email = req.params.username;
        const mentee = await Mentee.findOne({ email });
        if (!mentee) return res.status(404).json({ error: 'Mentee not found' });
        const menteeInterests = mentee.interests;
        if (!menteeInterests || menteeInterests.length === 0)
            return res.status(200).json([]);
        const allTopMentors = [];

        for (const interest of menteeInterests) {
            const mentorsForInterest = await Mentor.find({ ProfessionTitle: interest })
                .sort({ rating: -1, 'reviews.ratingCount': -1 })
                .limit(5);

            allTopMentors.push(...mentorsForInterest);
        }

        allTopMentors.sort((a, b) => {
            const aWeight = a.rating + 0.1 * (a.reviews ? a.reviews.length : 0);
            const bWeight = b.rating + 0.1 * (b.reviews ? b.reviews.length : 0);
            return bWeight - aWeight;
        });

        return res.status(200).json(allTopMentors.slice(0, 5));
    } catch (error) {
        console.error('Error finding top mentors for interests:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}