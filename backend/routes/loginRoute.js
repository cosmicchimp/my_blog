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
    const loginChecked = await checkLogin(username)
    if (!loginChecked.success) {
      return res.status(401).json({ success: false, message: "Incorrect password" })
    }
    console.log(`${username} is logging in`)
    return res.status(200).json({ success: true, userInfo: loginChecked.user, message: "Login successful" })
})

export default app