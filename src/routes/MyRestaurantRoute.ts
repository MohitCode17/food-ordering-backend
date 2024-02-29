import express from "express";
import multer from "multer";
import { createMyRestaurant, getMyRestaurant, updateMyRestaurant } from "../controllers/myRestaurantController";
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

// Get My Restaurant Api route
router.get("/", jwtCheck, jwtParse, getMyRestaurant);

// Create Restaurant Api Route
router.post("/", upload.single("imageFile"), validateMyRestaurantRequest, jwtCheck, jwtParse, createMyRestaurant);

// Update Restaurant Api Route
router.put("/", upload.single("imageFile"), validateMyRestaurantRequest, jwtCheck, jwtParse, updateMyRestaurant);

export default router;