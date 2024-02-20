import { Request, Response } from "express";
import User from "../models/user-model";

export const createUser = async (req: Request, res: Response) => {
    try {
        // 1. FIND THE EXISTING USER
        const {auth0Id} = req.body;

        let user = await User.findOne({ auth0Id });

        if(user) {
            return res.status(400).json({message: "User already exists"});
        };

        user = new User(req.body);
        await user.save();

        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({message: "Error creating user!"});
    };
};

