import express from "express"
import SignupRoute from "./Signup.ts"
import SigninRoute from "./Signin.ts"
import { GoogleRouter } from "./GoogleAuth.ts";
const app=express();
const router=express.Router();
router.use("/auth",SignupRoute)
router.use("/auth",SigninRoute)
router.use("/auth",GoogleRouter)
export default router;