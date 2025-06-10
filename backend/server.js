import express from "express"
import dotenv from "dotenv"
import {neon} from "@neondatabase/serverless"
import loginRoute from "./routes/loginRoute.js"
import signupRoute from "./routes/signupRoute.js"
dotenv.config()
const sql = neon(process.env.DATABASE_URL)
const app = express()
app.use(express.json());
app.post("/login", loginRoute)
app.post("/signup", signupRoute)
app.listen(3000, () => {
    console.log("Server Running")
})