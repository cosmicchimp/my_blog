import express from "express"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import {neon} from "@neondatabase/serverless"
dotenv.config()
const sql = neon(process.env.DATABASE_URL)
const app = express.Router()
app.use(express.urlencoded({ extended: true }));
app.post("/", async (req, res) => {
    try {
    const {username, password} = req.body
    const crypt = await bcrypt.hash(password, 6)
    await sql`INSERT INTO users(username, password) VALUES (${username}, ${crypt})`
    console.log(`${username} is creating an account`)
    return res.redirect("/?signup=success")
    }
    catch (e) {
        console.log("Error in signup route ", e)
        res.redirect("/signup?signup=fail")
    }
})

export default app