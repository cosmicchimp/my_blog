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
        const {blogContent, blogAuthor, blogTitle, blogThumbnail} = req.body
        await sql`INSERT INTO blogs (author, blog_content, blog_title, blog_thumbnail) VALUES (${blogAuthor},${blogContent},${blogTitle}, ${coverPhoto}, ${blogThumbnail})`
        return res.status(200).json({success:true, message:"Post successfully created"})
    }
    catch (e) {
        console.log("Error in blogPush function: ", e)
    }
})

export default app
