import express from "express"
import dotenv from "dotenv"
import {neon} from "@neondatabase/serverless"
const sql = neon(process.env.DATABASE_URL)
dotenv.config()
const app = express()
app.use(express.json());
app.listen(3000, () => {
    console.log("Server Running")
})