import mongoose, { Schema } from "mongoose"
import dotenv from "dotenv"
dotenv.config()
mongoose.connect(process.env.DB_URL!)
interface Auth
{
    email:string,
    password:string,
    name:string,
    username:string
}
const SignupSchema:Schema<Auth>=new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:3,
        max:12
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    }
})
const Signup=mongoose.model<Auth>("Signup",SignupSchema)
export{Signup}