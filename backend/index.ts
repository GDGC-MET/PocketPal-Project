import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import AuthRouter from "./routes/index.ts"
import cors from "cors"
dotenv.config();
const app=express()
app.use(cors())
app.use("/api",AuthRouter);
mongoose.connect(process.env.DB_URL!)
.then(()=>{console.log("Connected")})
app.listen(5173)