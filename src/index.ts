import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

// IMPORTING ROUTES
import myUserRoutes from "./routes/MyUserRoutes";

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

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});