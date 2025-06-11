import express from "express"
import dotenv from "dotenv"
import {neon} from "@neondatabase/serverless"
dotenv.config()
const sql = neon(process.env.DATABASE_URL)
const app = express.Router()
app.use(express.urlencoded({ extended: true }));
app.post("/", async (req, res) => {
    const {username} = req.body
    const databaseResult = await sql`SELECT * FROM users WHERE username = ${username}`
    const userData = databaseResult[0]
    if (userData == null || userData == undefined) {
        return res.json({success:true})
    }
    return res.json({success:false})
})

export default app