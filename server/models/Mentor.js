import mongoose from "mongoose";
const mentorSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        Name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        bio: {
            type: String,
            required: true,
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
        business_number: {
            type: String,
            default: function () {
                return this.phone;
            }
        },
        password: {
            type: String,
            required: true,
        },
        ProfessionTitle: {
            type: String,
        },
        availability: {
            type: [
                {
                    day: String, // Day of the week, e.g., "Monday"
                    slots: [
                        {
                            time: String, // Time slot, e.g., "9:00 AM - 11:00 AM"
                            status: {
                                type: String,
                                enum: ["available", "booked"],
                                default: "available",
                            },
                        },
                    ],
                },
            ],
        },
        Price: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0
        },
        reviews: {
            type: [
                {
                    mentee: String,
                    review: String,
                    rating: Number,
                },
            ],
        },
    },
    { timestamps: true }
);

export default mongoose.model("Mentor", mentorSchema);