import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 8080;

// Middlewares
app.use(cors());

// Test Api Endpoint
app.get("/api/test", async (req: Request, res: Response) => {
    res.json({message: "Test api testing"});
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});