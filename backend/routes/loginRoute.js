import express from "express"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import {neon} from "@neondatabase/serverless"
import checkLogin from "../middleware/checkLogin"
dotenv.config()
const sql = neon(process.env.DATABASE_URL)
const app = express.Router()
app.use(express.urlencoded({ extended: true }));
app.post("/", async (req, res) => {
    const {username, password} = req.body
    const checkLogin = checkLogin(username)
    if (!checkLogin.success) {
        res.redirect("/login")
        return res.json({success:false, message:"user not found"})
    }
    res.redirect("/")
    res.json({success:true, userInfo:checkLogin.user, message:"user found"})
    console.log(`${username} is logging in`)
})

export default app