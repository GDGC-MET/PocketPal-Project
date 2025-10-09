import mongoose, { Schema } from "mongoose"
import dotenv from "dotenv"
dotenv.config()
mongoose.connect(process.env.DB_URL!)
interface Auth
{
    email:string,
    password:string,
    name:string,
    username:string,
    googleid:string
}
const SignupSchema:Schema<Auth>= new Schema(
    {
  name: {
    type: String,
    required: function() {
      
      return !this.googleid;
    }
  },
  username: {
    type: String,
    unique: true,
    sparse: true
  },
  email: {
    type: String,
    required: function() {
    
      return !this.googleid;
    },
    unique: true,
    sparse: true
  },
  password: {
    type: String,
    minlength: 3,
    maxlength: 12,
    required: function() {
     
      return !this.googleid;
    }
  },
  googleid: {
    type: String,
    unique: true,
    sparse: true
  }
}
)
const Signup=mongoose.model<Auth>("Signup",SignupSchema)
export{Signup}