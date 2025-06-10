import express from "express"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
import {neon} from "@neondatabase/serverless"
dotenv.config()
const sql = neon(process.env.DATABASE_URL)
const app = express.Router()
app.post("/", async (req, res) => {
    const {username, password} = req.body
        console.log(`${username} is logging in`)
})

export default app