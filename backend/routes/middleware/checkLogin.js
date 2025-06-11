import dotenv from "dotenv"
import bcrypt from "bcrypt"
import {neon} from "@neondatabase/serverless"
const sql = neon(process.env.DATABASE_URL)
export default async function checkLogin(username) {
    const databaseResult = await sql`SELECT * FROM users WHERE username = ${username}`
    const userData = databaseResult[0]
    if (databaseResult != null || undefined) return {success:false}
    return {success:true, user:userData}
}