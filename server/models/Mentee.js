import mongoose from "mongoose";
const menteeSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
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
        password: {
            type: String,
            required: true,
        },
        Profession: {
            type: String,//student, working professional, entrepreneur, freelancer, other
        },
        enrolled: {
            type: [
                {
                    mentor: {
                        type: String,
                        required: true,
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
                }
            ]
        }
    },
    { timestamps: true }
);

export default mongoose.model("Mentee", menteeSchema);