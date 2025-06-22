import express from "express"
import dotenv from "dotenv"
import {neon} from "@neondatabase/serverless"
dotenv.config()
const sql = neon(process.env.DATABASE_URL)
const app = express.Router()
app.get("/", async (req, res) => {
    try {
        const response = await sql`SELECT * FROM blogs`
        console.log(response)
        res.status(200).json(response)
    }
    catch (e) {
        console.log('Error in blogPull: ', e)
    }
})
export default app