import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

// IMPORTING ROUTES
import myUserRoutes from "./routes/MyUserRoutes";
import myRestaurantRoutes from "./routes/MyRestaurantRoute";

// CLOUDINARY CONFIG
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URL as string)
    .then(() => console.log("Database connect successfully"))
    .catch((err) => console.log(`Error connected with db: ${err}`));

const app = express();
const port = process.env.PORT || 8080;

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/my/user", myUserRoutes);
app.use("/api/my/restaurant", myRestaurantRoutes);

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});