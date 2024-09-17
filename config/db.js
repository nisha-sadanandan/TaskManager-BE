import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path:"../.env"});


console.log(process.env.URL);

export const connect = async ()=>{

    try {
        await mongoose.connect(process.env.URL);
        console.log("monngoDB connected")
    } catch (error) {
        console.error("Error connecting to mongoDB",error)
    }
}