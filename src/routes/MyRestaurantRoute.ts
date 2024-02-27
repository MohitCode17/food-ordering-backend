import express from "express";
import multer from "multer";
import { createMyRestaurant } from "../controllers/myRestaurantController";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyRestaurantRequest } from "../middlewares/validateRequest";

const router = express.Router();

// Multer Config...
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});

// Create Restaurant Api Route
router.post("/", validateMyRestaurantRequest, jwtCheck, jwtParse, upload.single("imageFile"), createMyRestaurant);

export default router;