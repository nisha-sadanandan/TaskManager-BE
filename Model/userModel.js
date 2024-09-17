import mongoose from "mongoose";

const userSchema =  new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            minLength:3,
            maxLength:25,
        },

        email:{
            type:String,
            required:true,
            minLength:3,
            maxLength:35,
        },

        hashpassword:{
            type:String,
            required:true,
            minLength:4
        },

    },

    {timestamps:true}
)

const User = mongoose.model("User",userSchema);

export default User