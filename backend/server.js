import express from "express"
import dotenv from "dotenv"
import {neon} from "@neondatabase/serverless"
import loginRoute from "./routes/loginRoute.js"
import signupRoute from "./routes/signupRoute.js"
import checkUsername from "./routes/checkUsername.js"
import blogPush from "./routes/blogPush.js"
import cors from 'cors';
dotenv.config()
const sql = neon(process.env.DATABASE_URL)
const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/login", loginRoute)
app.use("/signup", signupRoute)
app.use("/checkusername", checkUsername)
app.use("/blogPush", blogPush)
app.listen(3000, () => {
    console.log("Server Running")
})