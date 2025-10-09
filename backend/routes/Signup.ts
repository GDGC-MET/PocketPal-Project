import express from "express"
import dotenv from "dotenv"
import z from "zod"
import { Signup } from "../model.ts";
import jwt from "jsonwebtoken"
dotenv.config();
const app=express();

const Signupbody=z.object({
    name:z.string(),
    username:z.string(),
    email:z.string().email(),
    password:z.string().min(3).max(12)
})
const router=express.Router();
router.use(express.json())
export default router.post("/signup",async(req,res)=>{
    try{
 const {success}=Signupbody.safeParse(req.body);
    }
   catch(e)
   {
    res.json({
        e
    })
   }
    
    const ExistingUser= await Signup.findOne({
        username:req.body.username,
        email:req.body.email
    })
    if(ExistingUser)
    {
        return res.status(402).json({
            message:"This email and username Already Exists"
        })
    }
        const user=await Signup.create({
        name:req.body.name,
        username:req.body.username,
        password:req.body.password,
        email:req.body.email

    })
    const userid=user._id;
    const token=jwt.sign({
        userid
    },process.env.JWT);
    return res.status(200).json({
        message:"Account Created Successfully",token,user
    })
})
