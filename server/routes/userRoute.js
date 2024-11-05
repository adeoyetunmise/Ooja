import {Router} from "express"
import { signup } from "../controllers/userController.js"


const userRouter = Router()

userRouter.post("/signup", signup)

userRouter.post("/login", (req, res) => {
    res.send("Login route")
})

userRouter.get("/user", (req, res) => {
    res.send("User route")
})

export default userRouter;