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
    plan: {
        type: String,
        enum: ["Once", "Weekly", "Monthly", "Quarterly"],
        default: "Once",
    },
    recording:{
        type: Boolean,
        default:false
    },
    transcription:{
        type: Object,
    }


},
    { timestamps: true }
);

export default mongoose.model("Bookings", BookingsSchema)