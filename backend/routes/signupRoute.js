import express from "express";
import bcrypt from "bcrypt";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config();

const sql = neon(process.env.DATABASE_URL);
const app = express.Router();

// Add JSON parsing middleware here if main app doesn't have it
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const saltRounds = 10;
    const crypt = await bcrypt.hash(password, saltRounds);

    await sql`INSERT INTO users(username, password) VALUES (${username}, ${crypt})`;

    console.log(`${username} is creating an account`);
    return res.redirect("/?signup=success");
  } catch (e) {
    console.error("Error in signup route ", e);
    return res.redirect("/signup?signup=fail");
  }
});

export default app;
