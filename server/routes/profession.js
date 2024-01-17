import express from "express";
const router = express.Router()
import { createProfession, deleteProfession, getProfession, getProfessions, updateProfession } from "../controllers/profession.js";
import { verifyAdmin } from "../utils/verifyToken.js";

//create
router.post("/", verifyAdmin, createProfession)
//update
router.put("/:id", verifyAdmin, updateProfession)
//delete
router.delete("/:id", verifyAdmin, deleteProfession)
//get
router.get("/find/:professionId", getProfession)
//get all
router.get("/", getProfessions)

export default router