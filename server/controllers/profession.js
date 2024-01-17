import Profession from "../models/Profession.js";

export const createProfession = async (req, res, next) => {
    const newProfession = new Profession(req.body);
    try {
        const savedProfession = await newProfession.save()
        res.status(201).json(savedProfession)
    } catch (error) {
        next(error)
    }
};
export const updateProfession = async (req, res, next) => {
    try {
        const updatedProfession = await Profession.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedProfession);
    } catch (err) {
        next(err);
    }
};
export const deleteProfession = async (req, res, next) => {
    try {
        await Profession.findByIdAndDelete(req.params.id);
        res.status(200).json("Profession has been deleted.");
    } catch (err) {
        next(err);
    }
};
export const getProfession = async (req, res, next) => {
    try {
        const profession = await Profession.find({ professional: req.params.professionId });
        res.status(200).json(profession);
    } catch (err) {
        next(err);
    }
};
export const getProfessions = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const allProfessions = await Profession.find({
            ...others,
            Price: { $gt: min | 1, $lt: max || 999 },
        }).limit(req.query.limit)
        res.status(200).json(allProfessions)
    } catch (err) {
        next(err);
    }
};