import express from "express";
import { createUser, getCurrentUser, updateUser } from "../controllers/myUserController";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyUserRequest } from "../middlewares/validateRequest";


const router = express.Router();

// Get Current User
// path     /api/my/user
router.get("/", jwtCheck, jwtParse, getCurrentUser);

// Create User
// path     /api/my/user
router.post("/", jwtCheck, createUser);

// Update User
// path     /api/my/user
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, updateUser);

export default router;