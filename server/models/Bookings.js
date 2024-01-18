import mongoose from "mongoose";
const BookingsSchema = new mongoose.Schema({
    reqBy: {
        type: String,
        required: true,
        // ref: "Mentees"
    },
    reqFor: {
        type: String,
        required: true,
        // ref: "Mentors"
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected", "cancelled", "completed"],
        default: "pending",
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    meetingLink: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

export default mongoose.model("Bookings", BookingsSchema)