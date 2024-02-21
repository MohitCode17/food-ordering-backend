import express from "express";
import { createUser } from "../controllers/myUserController";
import { jwtCheck } from "../middlewares/auth";


const router = express.Router();

// Create User
// path     /api/my/user
router.post("/", jwtCheck, createUser);

export default router;