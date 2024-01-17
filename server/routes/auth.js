import express from "express";
import { mentorLogin, mentorRegister, menteeRegister, menteeLogin } from "../controllers/auth.js";

const router = express.Router()

router.post("/mentorRegister", mentorRegister)
router.post("/mentorLogin", mentorLogin)
router.post("/menteeRegister", menteeRegister)
router.post("/menteeLogin", menteeLogin)

export default router