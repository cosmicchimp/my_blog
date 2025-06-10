import express from "express"
import dotenv from "dotenv"
import {neon} from "@neondatabase/serverless"
dotenv.config()
const sql = neon(process.env.DATABASE_URL)
const app = express()
app.use(express.json());
app.listen(3000, () => {
    console.log("Server Running")
})