import dotenv from "dotenv"
import bcrypt from "bcrypt"
import { neon } from "@neondatabase/serverless"
dotenv.config()
const sql = neon(process.env.DATABASE_URL)
export default async function checkLogin(username) {
  const databaseResult = await sql`SELECT * FROM users WHERE username = ${username}`
  const userData = databaseResult[0]
    console.log("userData = ", userData)
  if (!userData) {
    return { success: false } // No user found
  }
  return { success: true, user: userData }
}