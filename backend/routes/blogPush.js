import express from "express"
import {neon} from "@neondatabase/serverless"
import dotenv from "dotenv"
dotenv.config()
const sql = neon(process.env.DATABASE_URL);
const app = express.Router()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/", async (req, res) => {
    try{
          console.log("💥 /blogPush body:", req.body)
        const {blogContent, blogAuthor, blogTitle} = req.body
        // if (!blogContent || !blogAuthor || !blogTitle) {
        //     return res.status(400).json({ success: false, message: "Missing required fields." })
        // }   
        await sql`INSERT INTO blogs (author, blog_content, blog_title) VALUES (${blogAuthor},${blogContent},${blogTitle})`
        return res.status(200).json({success:true, message:"Post successfully created"})
    }
    catch (e) {
        console.log("Error in blogPush function: ", e)
    }
})

export default app
