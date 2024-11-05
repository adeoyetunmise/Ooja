import User from "../models/userModel.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const getToken = ({id}) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '3d'
    })
}
export const signup = async (req, res) => {
    const {firstName, lastName, userName, email, age, password} = req.body;

    try {
        const user = await User.signup(firstName, lastName,userName, email, age, password);
        res.status(200).json({ user,token: await getToken(user) });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};