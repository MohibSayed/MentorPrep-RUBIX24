import mongoose from "mongoose";
const menteeSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        mentor: {
            type: Boolean,
            required: true,
            default: false,
        },
        country: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
        city: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        // password: {
        //     type: String,
        //     required: true,
        // },
        Profession: {
            type: String,//student, working professional, entrepreneur, freelancer, other
        },
        interests: {
            type: [String],
        },
    },
    { timestamps: true }
);

export default mongoose.model("Mentee", menteeSchema);