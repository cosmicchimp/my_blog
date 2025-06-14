import express from "express"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import { neon } from "@neondatabase/serverless"
import checkLogin from "../middleware/checkLogin.js"

dotenv.config()
const sql = neon(process.env.DATABASE_URL)
const app = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/", async (req, res) => {
    try {
        console.log("LOGIN BODY RECEIVED:", req.body) // for debugging

        const { username, password } = req.body

        const loginChecked = await checkLogin(username)
        if (!loginChecked.success) {
            return res.status(401).json({ success: false, message: "Account doesn't exist" })
        }

        const passwordCheck = await bcrypt.compare(password, loginChecked.userData.password)

        if (passwordCheck) {
            return res.status(200).json({
                success: true,
                userInfo: loginChecked.user,
                message: "Login successful"
            })
        } else {
            return res.status(401).json({ success: false, message: "Password did not match our records" })
        }

    } catch (e) {
        console.error("Error in backend login route:", e)
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})

export default app
