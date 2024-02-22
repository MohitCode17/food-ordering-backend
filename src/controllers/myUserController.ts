import { Request, Response } from "express";
import User from "../models/user-model";

export const createUser = async (req: Request, res: Response) => {
    try {
        // 1. FIND THE EXISTING USER
        const {auth0Id} = req.body;

        let user = await User.findOne({ auth0Id });

        if(user) {
            return res.status(200).send();
        };

        user = new User(req.body);
        await user.save();

        res.status(201).json(user);

    } catch (error) {
        res.status(500).json({message: "Error creating user!"});
    };
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { name, addressLine1, city, country } = req.body;

        const user = await User.findById(req.userId);

        if(!user) {
            return res.status(404).json({message: "User not found"});
        };

        user.name = name;
        user.addressLine1 = addressLine1;
        user.city = city;
        user.country = country;

        await user.save();

        res.status(200).json(user);
    } catch (error) {
        
    }
}