import express from "express";
import { createUser } from "../controllers/myUserController";


const router = express.Router();

// Create User
// path     /api/my/user
router.post("/", createUser);

export default router;