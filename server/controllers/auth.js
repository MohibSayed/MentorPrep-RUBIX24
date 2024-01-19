import Mentor from "../models/Mentor.js"
import Mentee from "../models/Mentee.js"
import { createError } from "../utils/error.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const mentorRegister = async (req, res, next) => {
    try {
        

        const newUser = new Mentor(
            req.body,
            
        )
        await newUser.save()
        res.status(201).send("Mentor has been registered successfully!")
    } catch (err) {
        next(err)
    }
}
export const mentorLogin = async (req, res, next) => {
    try {
        const user = await Mentor.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "Mentor not found!"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or username!"));

        const token = jwt.sign({ id: user._id, ProfessionTitle: user.ProfessionTitle }, process.env.JWT)

        const { password, ...otherDetails } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json({ ...otherDetails })
    } catch (err) {
        next(err)
    }
}

export const menteeRegister = async (req, res, next) => {
    try {
      
        const newUser = new Mentee(
            req.body,
        )
        await newUser.save()
        res.status(201).send("Mentee has been registered successfully!")
    } catch (err) {
        next(err)
    }
}
export const menteeLogin = async (req, res, next) => {
    try {
        const user = await Mentee.findOne({ email: req.body.email });
        if (!user) return next(createError(404, "Mentee not found!"));

        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
}


export const userType = async (req,res,next) => {
    const {email} = req.body;
    const user = await Mentee.findOne({email:email});
    if(!user){
        return res.status(200).json({Type:"Mentor"})
    }
    return res.status(200).json({Type:"Mentee"});

}